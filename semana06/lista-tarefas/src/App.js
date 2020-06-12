import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:50vw;
  margin: 0 auto;
  background-color: lightcoral;
  text-align: center;
`

const Concluida = styled.li`
  text-decoration: line-through;
`
const DivTarefa = styled.div`
  display:flex;
  justify-content:center
`


class App extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      tarefas:[],
      valorDescricao:"",
      valorStatus:"",
    }
  }

componentDidUpdate() {
  const tarefaString = JSON.stringify(this.state.tarefas);

  localStorage.setItem("tarefas", tarefaString);
};

componentDidMount(){
  const tarefasStorage = localStorage.getItem("tarefas");

  const tarefaVoltaObj = JSON.parse(tarefasStorage);

  this.setState({tarefas: tarefaVoltaObj});
}
  
onChangeDescricao = (event) =>{this.setState({valorDescricao: event.target.value})};
onChangeStatus = (event) =>{this.setState({valorStatus: event.target.value})};

onClickAdicionar = () =>{
  const novaTarefa = {descricao: this.state.valorDescricao, status: false};

  const auxiliar = [...this.state.tarefas, novaTarefa]

  this.setState({tarefas: auxiliar});
}

funcaoInsereTarefa=()=>{
  const auxiliar=this.state.tarefas.map((elemento,index)=>{

    if(this.state.valorStatus===""){

      if(elemento.status === true){
        return (<DivTarefa key={index}>
                    <Concluida  onClick={()=>this.onClickTarefa(index)}>
                    {elemento.descricao}</Concluida>
                    <button onClick={()=>this.removeTarefa(index)}>excluir</button>
                </DivTarefa>);
      }else{
        return (<DivTarefa key={index}>
                  <li  onClick={()=>this.onClickTarefa(index)}>
                  {elemento.descricao}</li>
                  <button onClick={()=>this.removeTarefa(index)}>excluir</button>
                </DivTarefa>)
      }

    }else if(this.state.valorStatus==="pendente"){

      if(elemento.status !== true){
        return (<DivTarefa key={index}>
                  <li  onClick={()=>this.onClickTarefa(index)}>
                  {elemento.descricao}</li>
                  <button onClick={()=>this.removeTarefa(index)}>excluir</button>          
                </DivTarefa>)
      }

    }else if(this.state.valorStatus==="completas"){

      if(elemento.status === true){
        return (<DivTarefa key={index}>
                    <Concluida  onClick={()=>this.onClickTarefa(index)}>
                    {elemento.descricao}</Concluida>
                    <button onClick={()=>this.removeTarefa(index)}>excluir</button>
                </DivTarefa>)
      }
    }

  })

  return auxiliar;
}

onClickTarefa=(key)=>{
  const auxiliar=this.state.tarefas.map((elemento,index)=>{
    if(index!==key){
      return elemento;
    }else{
      elemento.status = !elemento.status;
      return elemento;
    }
  })

  this.setState({tarefas: auxiliar})
}

removeTarefa=(key)=>{
  const auxiliar=this.state.tarefas.filter((elemento,index)=>{
    return index!==key
  })
  this.setState({tarefas: auxiliar})
}

limpaTudo=()=>{
  this.setState({tarefas: []})
}


inserePendente=()=>{
  const auxiliar=this.state.tarefas.map((elemento,index)=>{

      if(elemento.status !== true){
        return (<DivTarefa key={index}><li>{elemento.descricao}</li></DivTarefa>)
      }
  })

  return auxiliar;
}

insereConcluido=()=>{
  const auxiliar=this.state.tarefas.map((elemento,index)=>{
  
  if(elemento.status === true){
        return (<DivTarefa key={index}>
                    <Concluida>{elemento.descricao}</Concluida></DivTarefa>)
  }
  })
  return auxiliar;
}




render(){
  return (
    <Container>
      <h1>Lista de tarefas</h1>
      <br/>
      <input onChange={this.onChangeDescricao} value={this.state.valorDescricao}></input>
      <button onClick={this.onClickAdicionar}>adicionar</button><br/><br/>
      <label>Filtro</label>
      <select value={this.state.valorStatus} onChange={this.onChangeStatus}>
        <option value="">Nenhum</option>
        <option value="pendente">Pendentes</option>
        <option value="completas">Completas</option>
      </select>
      <br/><br/>

      {this.funcaoInsereTarefa()}

    <div>
    <h2>Tarefas Pendentes</h2>
    <br/>
    {this.inserePendente()}
    
    </div>

    <div>
    <h2>Tarefas Completas</h2>
    <br/>
    {this.insereConcluido()}
    </div>




      <br/><br/>
      <button onClick={this.limpaTudo}>limpa todas as tarefas</button>
    </Container>
  );
}

}

export default App;

/* lista-tarefas-ricardo.surge.sh */