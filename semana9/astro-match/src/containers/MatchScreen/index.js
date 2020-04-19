import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'

import {getMatches, infoProfile} from '../../actions/profiles'

class MatchScreen extends Component {
	componentDidMount() {
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}

	//mudar nome 
	choosedProfile=(name)=>{
		this.props.infoProfile(name)
		this.props.goToProfileScreen()
	}


	render() {
		const {goToSwipeScreen, matches} = this.props

		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
				<List>
					{matches[0] ? matches.map((match) => (
						<ListItem key={match.name} onClick={()=>this.choosedProfile(match.name)}>
							<Avatar src={match.photo}/>
							<ListText>{match.name}</ListText>
						</ListItem>
					)): <p>Infelizmente você ainda não tem nenhum match, 
						continue tentando e investindo no seu amor!</p>}
				</List>
			</div>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}

const mapStateToProps = state => ({
	matches: state.profiles.matches
})

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	goToProfileScreen: ()=> dispatch(updateCurrentPage('ProfileScreen')),
	getMatches: ()=>dispatch(getMatches()),
	infoProfile: (name) => dispatch(infoProfile(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
