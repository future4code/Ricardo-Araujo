import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

class TripList extends React.Component {

    componentDidMount(){
        const token = localStorage.getItem("token");
    
        (token === null && this.props.goTologinScreen())
    }

render(){
    const { goToHome, goToTripDetails } = this.props
    return(
        <div>
            <h1>TripList Screen</h1>
            <button onClick={goToHome}>volta para tela de login</button>
            <button onClick={goToTripDetails}>va para a tela de detalhes</button>
        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goToHome: () => dispatch(push(routes.homeAdm)),
        goToTripDetails: () => dispatch(push(routes.tripDetailScreen))
    }
  }


export default connect(null, mapDispatchToProps)(TripList);