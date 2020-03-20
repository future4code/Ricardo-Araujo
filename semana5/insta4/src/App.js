import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      
      arrayPosts:[
      {fotoUsuario: 'https://picsum.photos/50/50',
        nomeUsuario:'paulinha',
        fotoPost: 'https://picsum.photos/200/150'},

        {fotoUsuario: 'https://picsum.photos/50/51',
        nomeUsuario: 'joao',
        fotoPost: 'https://picsum.photos/200/151'},
        
        {fotoUsuario: 'https://picsum.photos/50/52',
        nomeUsuario: 'goli',
        fotoPost: 'https://picsum.photos/200/152'}
      ],
    valorInputFotoUsuario: "",
    valorInputNomeUsuario: "",
    valorInputFotoPost: ""
   }

  }
  
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost}
    
    const auxiliar = [...this.state.arrayPosts, novoPost];

    this.setState({arrayPosts: auxiliar})
    console.log(auxiliar);
  }
  
  
  onChangeInputNomeUsuario = event => {
    this.setState({valorInputNomeUsuario: event.target.value});
    console.log(this.state.valorImputNomeUsuario);
  }

  onChangeInputFotoUsuario = event =>{
    this.setState({valorInputFotoUsuario: event.target.value});
  }

  onChangeInputFotoPost = event => {
    this.setState({valorInputFotoPost: event.target.value});
  }


  render() {
    const inserePost = this.state.arrayPosts.map((elemento, index) => {
      return(
        <Post
        nomeUsuario={elemento.nomeUsuario}
        fotoUsuario={elemento.fotoUsuario}
        fotoPost={elemento.fotoPost}
        key={index}
        />
      )})
      return (

      <div className={'app-container'}>  
        {inserePost}
        
        <input placeholder={"Nome do Usuario"} value={this.state.valorImputNomeUsuario} onChange={this.onChangeInputNomeUsuario}/>
        <input placeholder={"Foto de perfil"} value={this.state.valorInputFotoUsuario} onChange={this.onChangeInputFotoUsuario}/>
        <input placeholder={"Post"} value={this.state.valorInputFotoPost} onChange={this.onChangeInputFotoPost}/>

        <button onClick={this.adicionaPost}>Postar</button>

      </div>
    );
  }
}

export default App;

//http://insta4-ricardo.surge.sh

//https://codesandbox.io/s/exemplos-listas-estado-6983d