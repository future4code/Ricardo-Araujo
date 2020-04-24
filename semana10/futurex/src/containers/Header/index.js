import React from "react"
import AppBar from '@material-ui/core/AppBar';
import {MyAppBar, LogoWrapper} from './style';
import Button from '@material-ui/core/Button';
import Logo from '../../images/futurex.png';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class Header extends React.Component{




handleMenu=()=>{
    const { goTologinScreen, goToCreateTrip } = this.props

    const token = localStorage.getItem("token");

    const logged = token!==null
 
    switch(logged){
        case (true):
            return (
                <div>
                    <p>teste logado</p>
                    <Button onClick={this.logout}>logout</Button>            
                    <Button onClick={goToCreateTrip}>Criar uma viagem</Button>
                </div>
            )
        default:
            return (
                <Button onClick={goTologinScreen}>Login</Button>

            )
    }
}

logout = () =>{
    localStorage.clear()
  }

    render(){
        const { publicTrips } = this.props

        return(
            <AppBar position="static">
                <MyAppBar >
                    <LogoWrapper src={Logo}/>
                    <Button onClick={publicTrips}>PublicTrips</Button>

                    {this.handleMenu()}
                </MyAppBar>
            </AppBar>
        )
    }


}

const mapDispatchToProps = dispatch =>{
    return{
        publicTrips: () => dispatch(push(routes.publicTrips)),
        goTologinScreen: () => dispatch(push(routes.root)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
    }
  }

  export default connect (null, mapDispatchToProps) (Header);