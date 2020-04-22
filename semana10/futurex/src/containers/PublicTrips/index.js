import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

class PublicTrips extends React.Component {



render(){
    const { goTologinScreen } = this.props
    return(
        <div>
            <h1>Public AllTrips Screen</h1>
            <button onClick={goTologinScreen}>volta para tela de login</button>
        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goTologinScreen: () => dispatch(push(routes.root))
    }
  }


export default connect (null, mapDispatchToProps) (PublicTrips);