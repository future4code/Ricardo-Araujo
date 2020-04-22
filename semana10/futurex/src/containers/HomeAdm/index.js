import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

class HomeAdm extends React.Component {



render(){
    const { goTologinScreen, goToCreateTrip, goToTripList } = this.props
    return(
        <div>
            <h1>Home ADM</h1>
            <button onClick={goTologinScreen}>volta para a tela de login</button>
            <button onClick={goToCreateTrip}>Criar uma viagem</button>
            <button onClick={goToTripList}>Ver todas as viagens</button>
        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goTologinScreen: () => dispatch(push(routes.root)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
        goToTripList: () => dispatch(push(routes.tripList))
    }
  }


export default connect (null, mapDispatchToProps) (HomeAdm);