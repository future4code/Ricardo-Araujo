import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Form from './components/Form'
import Users from './components/Users'

const ContainerApp = styled.div`

`
const BotaoVoltar = styled.button`
  height: 20px;
  width: 200px;
  background-color: yellow;
`



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      qualTela: true,
      usuarios:[]
    }
  }

componentDidMount(){
  this.pegaDadoServidor()
}

pegaDadoServidor=()=>{
  axios.get("https://us-central1-future-apis.cloudfunctions.net/api/users", {headers: {
      "api-token": "ricardo-hamilton"
  } 
  }   
  ).then(response=>{
      this.setState({usuarios: response.data.result})
  })
  .catch(error=>{
      alert("Não foi possivel pegar os dados do servidor")
  })
}

mudaTela = ()=>{
  this.setState({qualTela: !this.state.qualTela})
}


render(){
  return (
    <ContainerApp>

      {this.state.qualTela ?
      <Form><BotaoVoltar onClick={this.mudaTela}>Ir para página de lista</BotaoVoltar></Form> : 
      <Users usuarios={this.state.usuarios} 
        pegaDadoServidor={this.pegaDadoServidor}>
        <BotaoVoltar onClick={this.mudaTela}>Ir para página de registro</BotaoVoltar>
      </Users>}
      
    </ContainerApp>
  );
}
}

export default App;


//screeching-cook.surge.sh
