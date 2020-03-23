import React from 'react';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import EtapaFim from './components/EtapaFim/EtapaFim'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      etapa: 1,
    }
  }

funcaoApp = () => {
  console.log("teste")
  this.setState({etapa: this.state.etapa+ 1});
  console.log(this.state.etapa)
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
    default:
    etapa = <EtapaFim funcaoApp={this.funcaoApp}/>
  }

return etapa;

}





render(){  
  return (
    <div className="App">
      {/* <Etapa1 funcaoApp={this.funcaoApp}/> */}

      {this.defineEtapa()}

    </div>
  );


}  
}

export default App;
