import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

class TripList extends React.Component {



render(){
    const { goToHome } = this.props
    return(
        <div>
            <h1>TripList Screen</h1>
            <button onClick={goToHome}>volta para tela de login</button>
        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goToHome: () => dispatch(push(routes.homeAdm))
    }
  }


export default connect(null, mapDispatchToProps)(TripList);