import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

class CreateTrip extends React.Component {


render(){
    const { goToHome } = this.props
    
    return(
        <div>
            <h1>Create Trips</h1>
            <button onClick={goToHome}>volta para home</button>
        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goToHome: () => dispatch(push(routes.homeAdm))
    }
  }


export default connect (null, mapDispatchToProps) (CreateTrip);