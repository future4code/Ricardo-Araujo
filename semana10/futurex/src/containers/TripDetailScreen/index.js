import React from 'react'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

class TripDetailScreen extends React.Component{

    
    componentDidMount(){
        const token = localStorage.getItem("token");
    
        (token === null && this.props.goTologinScreen())
    }

    render(){

        const {goToHome}=this.props

        return(
            <div>
                <h1>Tela de detalhes</h1>
                <p>Aqui vou colocar a lista de candidatos + deletar viagem</p>
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


export default connect (null, mapDispatchToProps) (TripDetailScreen)