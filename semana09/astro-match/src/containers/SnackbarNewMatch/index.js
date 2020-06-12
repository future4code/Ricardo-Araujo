import React  from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {closeSnackbar} from '../../actions/profiles'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}/>;
  }

class SnackbarNewMatch extends React.Component {

    render(){
        const {newMatch, closeSnackbar} = this.props

        return(
            <div>
            <Snackbar open={newMatch} autoHideDuration={6000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar}>
                    Você tem um novo match, corre lá para a paquera !
                </Alert>  
            </Snackbar>
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
    newMatch: state.profiles.newMatch
})

const mapDispatchToProps = (dispatch) =>({
    closeSnackbar: () => dispatch(closeSnackbar())
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarNewMatch)