import React from 'react';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import EtapaFim from './components/EtapaFim/EtapaFim'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      formulario: [{
        nome:"",
        idade:"",
        email:"",
        escolaridade:"",
        curso:"",
        unidadeDeEnsino:"",
        pqNaoTerminou:"",
        cursoComplementar:"",
      }],
      etapa: 1,
    }
  }

funcaoApp = (novaArray) => {
  const auxiliar = [...this.state.formulario, novaArray]

  this.setState({formulario: auxiliar, etapa: this.state.etapa + 1});
}

funcaoInsereFormulario=()=>{
  const auxiliar = this.state.formulario.map((elemento, index) => {
    return (<div key={index}>
              <p>{elemento.nome}</p>
              <p>{elemento.idade}</p>
              <p>{elemento.email}</p>
              <p>{elemento.escolaridade}</p>
              <p>{elemento.curso}</p>
              <p>{elemento.unidadeDeEnsino}</p>
              <p>{elemento.pqNaoTerminou}</p>
              <p>{elemento.cursoComplementar}</p>
            </div>)
  });
  return auxiliar;
}

defineEtapa = () =>{

  let etapa;

  switch (this.state.etapa){
    case 1:
    etapa = <Etapa1 funcaoApp={this.funcaoApp}/>
    break;
    case 2:
    etapa = <Etapa2 funcaoApp={this.funcaoApp}/>
    break;
    case 3:
    etapa = <Etapa3 funcaoApp={this.funcaoApp}/>
    break;
    default:
    etapa = <EtapaFim funcaoApp={this.funcaoApp}/>
    break;
  }

return etapa;

}


render(){  

  return (
    <div className="App">

      {this.defineEtapa()}

      {this.funcaoInsereFormulario()}
      
    </div>
  );


}  
}

export default App;

//futureforms-ricardo.surge.sh