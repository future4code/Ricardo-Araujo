import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      
      arrayPosts:[
      {fotoUsuario: "https://picsum.photos/50/52",
        nomeUsuario: "Goli",
        fotoPost: "https://picsum.photos/200/152"},

        {fotoUsuario: "https://picsum.photos/50/52",
        nomeUsuario: "Goli",
        fotoPost: "https://picsum.photos/200/152"}
    ] }

  }


  render() {

    const teste = this.state.arrayPosts .map(elemento => {
      return(
        <Post
        nomeUsuario={elemento.nomeUsuario}
        fotoUsuario={elemento.fotoUsuario}
        fotoPost={elemento.fotoPost}
        />
      )})
      return (

      <div className={'app-container'}>  
        {teste}
        

        <input></input>


      </div>
    );
  }
}

export default App;

//http://insta4-ricardo.surge.sh