import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:pink;
    width: 50vw;
    margin: 0 auto;
`

class Etapa1 extends React.Component{
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
    const novaArray = {nome: this.state.nome, idade: this.state.idade, email: this.state.email, escolaridade: this.state.escolaridade}

    this.props.funcaoApp(novaArray)
}

render(){
    return(
        <Container>

        
            <label>1. Qual o seu nome?</label><br/>
            <input onChange={this.onChangeNome}></input><br/><br/>
            <label>2. Qual sua idade?</label><br/>
            <input onChange={this.onChangeIdade}></input><br/><br/>
            <label>3. Qual seu e-mail?</label><br/>
            <input onChange={this.onChangeEmail}></input><br/><br/>
            <label>4. Qual sua escolaridade?</label><br/>
            <select value={this.state.valorInputEscolaridade} onChange={this.onChangeEscolaridade} required>
                    <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                    <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>
            </select><br/><br/>


            <button onClick={this.onClickEtapa1}>enviar</button><br/>
        
           
        </Container>
    );
};

}

export default Etapa1