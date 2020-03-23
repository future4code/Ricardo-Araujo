import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:pink;
    width: 50vw;
    margin: 0 auto;
`

class Etapa2 extends React.Component{
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
    
            <label>5. Qual o curso?</label><br/>
            <input onChange={this.onChangeNome}></input><br/><br/>
            <label>6. Qual a unidade de ensino?</label><br/>
            <input onChange={this.onChangeIdade}></input><br/><br/>

            <button onClick={this.onClickEtapa1}>enviar</button><br/>
        
        </Container>
    );
};

}

export default Etapa2