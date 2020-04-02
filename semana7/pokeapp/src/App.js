import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerApp = styled.div`
  background-color: purple;
  width: 500px;
  margin:0 auto;
`

const StatsDiv = styled.div`
  border: 1px solid black;
`

class App extends React.Component  {
  constructor(props){
    super(props)
    this.state={
     allPokemons:[],
     choosedPokemon: "",
     infoChoosedPokemon:""
    }
  }

componentDidMount(){
  this.getPokemon();
}

componentDidUpdate(){
}

getPokemon = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon")
  .then((response)=>{
    this.setState({allPokemons: response.data.results})
  })
  .catch((error)=>{
    alert("algo deu errado ao buscar a lista de pokemons no servidor");
  })
}

selectPokemon = () =>{
  const renderPokemon = this.state.allPokemons.map((pokemon,index)=>{
    return (<option value={pokemon.name} key={index}>{pokemon.name}</option>)
  })

  return renderPokemon;
}

onChoosePokemon=(event)=>{
  this.setState({choosedPokemon: event.target.value});
  // this.lookPokemonInfoOnServer();

  axios.get(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
  .then((response)=>{
    console.log("estou em loop ?")
    this.setState({infoChoosedPokemon: response.data})
  })
  .catch((error)=>{
    alert("Erro ao buscar as informações do pokemon no servidor");
  })
}

// lookPokemonInfoOnServer=()=>{
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.choosedPokemon}`)
//   .then((response)=>{
//     console.log("estou em loop ?")
//     this.setState({infoChoosedPokemon: response.data})
//   })
//   .catch((error)=>{
//     alert("Erro ao buscar as informações do pokemon no servidor");
//   })
// }

renderPokemon=()=>{
  console.log(this.state.infoChoosedPokemon.stats)
  return (<div> 
            <p>name: {this.state.infoChoosedPokemon.name}</p>
            <p>id: {this.state.infoChoosedPokemon.id}</p>
            <img alt={"Pokemon image"} src={this.state.infoChoosedPokemon.sprites.front_default}/>
          </div>)
}


statsPokemon=()=>{
  const testPokemon = this.state.infoChoosedPokemon.stats.map((stats,index)=>{
    return (<div key={index}>
              <span><span>{stats.stat.name}: {stats.base_stat}</span> </span>
            </div>)
  })

  return testPokemon;

}




render(){
  return (
    <ContainerApp>
      <select onChange={this.onChoosePokemon}>
        <option>none</option>
        {this.selectPokemon()}
      </select>

      {(this.state.infoChoosedPokemon)&&(this.renderPokemon())}

      <StatsDiv>
        {(this.state.infoChoosedPokemon)&&(this.statsPokemon())}
      </StatsDiv>
      

    </ContainerApp>
  );


 } 
}

export default App;

//jazzy-goat.surge.sh