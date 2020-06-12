import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import UserDetails from './UserDetails'

const ContainerUsers = styled.div`
    display:flex;
    flex-direction: column;
`

const ContainerLista = styled.div`
    margin:0 auto;
    margin-top:100px;
    display: flex;
    flex-direction:column;
`
const CadaUsuario = styled.div`
    display:flex;
    justify-content:space-between;
`
const DetalheUsuario = styled.div`
    background-color: pink;
`

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={
            detalheUsuario: ""
        }
    }

componentDidMount(){
    {this.props.pegaDadoServidor()}
}    

renderizaDados=()=>{
    const auxiliar=this.props.usuarios.map((elemento)=>{
        return (<CadaUsuario key={elemento.id}>
                    <span onClick={()=>this.mostraUsuario(elemento.id)}>{elemento.name}</span>
                    <span onClick={()=>this.deletaUsuario(elemento.id)}>X</span>
                </CadaUsuario> )
    })
    return auxiliar;
}

deletaUsuario=(id)=>{
    if (window.confirm('Tem certeza que deseja apagar esta mensagem?')) {
    axios
        .delete(
        `https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`,
        {
            headers: {
            "api-token": "ricardo-hamilton"
            }
        }
        ).then(()=>{
            {this.props.pegaDadoServidor()}
            alert("Usuário deletado com sucesso")
        }).catch(()=>{
            alert("Algo deu errado, usuário não deletado")
        })
    }
}


mostraUsuario=(id)=>{

axios.get(`https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`,
{
    headers: {
    "api-token": "ricardo-hamilton"
    }
}
).then((response)=>{
    this.setState({detalheUsuario: response.data.result})
}).catch(()=>{
    alert("algo deu errado");
})

}



render(){
    return(
        <ContainerUsers>
            {this.props.children}
            <ContainerLista>
                <h2>Usuários Cadastrados:</h2>
                {this.renderizaDados()}
            </ContainerLista>

            <DetalheUsuario>
                <UserDetails detalheUsuario={this.state.detalheUsuario}/>
            </DetalheUsuario>

        </ContainerUsers>
    )
}



}
export default Users;