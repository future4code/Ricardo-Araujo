import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:pink;
    width: 50vw;
    margin: 0 auto;
`

class EtapaFim extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "",
            idade: "",
            email: "",
            escolaridade: "",
        }
    }

onChangeNome = event => {this.setState({nome: event.target.value})}
onChangeIdade = event => {this.setState({idade: event.target.value})}
onChangeEmail = event => {this.setState({email: event.target.value})}
onChangeEscolaridade = event => {this.setState({escolaridade: event.target.value})}

onClickEtapa1 = () =>{
    console.log(this.state.formulario)
    this.props.funcaoApp(this.state.formulario)
}

render(){
    return(
        <Container>
    
           <h1>O FORMULÁRIO ACABOU</h1>
           <br/>
           <p>Muito obrigado por participar! Entraremos em contato!</p>
        
        </Container>
    );
};

}

export default EtapaFim;