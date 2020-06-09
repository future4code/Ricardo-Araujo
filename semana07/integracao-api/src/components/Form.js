import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerForm = styled.div`
    display:flex;
    flex-direction: column;
`
const ContainerInput = styled.div`
    margin:0 auto;
    margin-top:100px;

`

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputName: "",
            inputEmail: ""
        }
    }

onChangeNome=(event)=>{this.setState({inputName: event.target.value})};
onChangeEmail=(event)=>{this.setState({inputEmail: event.target.value})}   


adicionaUsuario = () =>{
const body = {
    name: this.state.inputName,
    email: this.state.inputEmail
}
axios
.post(
    "https://us-central1-future-apis.cloudfunctions.net/api/users", 
    body,
    {
        headers: {
            "api-token": "ricardo-hamilton"
        }
    }
).then(response=>{
        alert("Usuário cadastrado com sucesso!")
    })
    .catch(error=>{
        alert("Algo deu errado, tente novamente!")
    })
}



render(){
    return(
        <ContainerForm>
            {this.props.children}
            <ContainerInput>
                <label>Nome: </label>
                <input onChange={this.onChangeNome}></input><br/>
                <label>E-mail: </label>
                <input onChange={this.onChangeEmail}></input><br/><br/>
                <button onClick={this.adicionaUsuario}>Salvar</button>

            </ContainerInput>
        </ContainerForm>
    )
}


}
export default Form;