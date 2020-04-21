import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

class HomeAdm extends React.Component {



render(){
    const { goTologinScreen, goToCreateTrips, goToTripList } = this.props
    return(
        <div>
            <h1>Home ADM</h1>
            <button onClick={goTologinScreen}>volta para a tela de login</button>
            <button onClick={goToCreateTrips}>Criar uma viagem</button>
            <button onClick={goToTripList}>Ver todas as viagens</button>
        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goTologinScreen: () => dispatch(push(routes.root)),
        goToHomeAdm: () => dispatch(push(routes.HomeAdm)),
        goToCreateTrips: () => dispatch(push(routes.createTrips)),
        goToTripList: () => dispatch(push(routes.tripList))
    }
  }


export default connect (null, mapDispatchToProps) (HomeAdm);