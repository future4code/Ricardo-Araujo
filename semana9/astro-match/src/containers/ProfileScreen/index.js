import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {mdiAccountMultipleCheck} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {MatchIconLeft, MatchIconRight, ContentWrapper, MenssageWrapper} from './styled'
import Badge from '@material-ui/core/Badge';
import UserSwipeCard from '../../components/UserSwipeCard'
import ChatIcon from '@material-ui/icons/Chat'


class ProfileScreen extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
      profileInfo: [{}],
		}
	}

  componentDidMount(){
    this.filterChoosedFilter()
  }

  filterChoosedFilter=()=>{
    const newProfileInfo = this.props.matches.filter((profile)=>{
      return (profile.name === this.props.choosedProfile)
    })

    this.setState({profileInfo: newProfileInfo})
  }


  render() {
    const {goToSwipeScreen, goToMatchScreen, numberOfmatches} = this.props

    return (
      <div>
        <AppBar
          leftAction={<MatchIconLeft
            path={mdiAccountSwitch}
            size={1}
            onClick={goToSwipeScreen}
          />}
          
          rightAction={
						<Badge badgeContent={numberOfmatches} 
								color="secondary" overlap="circle">
							<MatchIconRight
								size={1.5}
								path={mdiAccountMultipleCheck}
								onClick={goToMatchScreen}
							/>
						</Badge>
					}
        />


        <ContentWrapper>
          <UserSwipeCard userToSwipe={this.state.profileInfo[0]} animationDirection={null}/>
        </ContentWrapper>

        <MenssageWrapper>
          <p>Envie uma mensagem: </p>
          <ChatIcon color="secondary" size="large"/>
        </MenssageWrapper>

      </div>
    )
  }
}

ProfileScreen.propTypes = {
  goToSwipeScreen: PropTypes.func.isRequired,
  goToMatchScreen: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  numberOfmatches: state.profiles.numberOfmatches,
  choosedProfile: state.profiles.choosedProfile,
  matches: state.profiles.matches,
})

const mapDispatchToProps = (dispatch) => ({
  goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
  goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen'))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
