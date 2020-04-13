import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerCreate = styled.div`
`



class CreatePlaylist extends React.Component {
  constructor(props){
    super(props)
    this.state={
        inputPlayListName:"",
    }
  }


onChangeInputPlayListName =(event)=>{
    this.setState({inputPlayListName: event.target.value});
}

createPlayList = () =>{
    const body ={
        name: this.state.inputPlayListName
    };
    axios.post("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists", body,{
        headers:{"auth" : this.props.user}
    }).then(response =>{
        alert("Playlist criada com sucesso!");
        this.setState({inputPlayListName: ""})
    }).catch(error=>{
        alert("não foi possível criar a playlist");
    })
}


render(){
  return (
    <ContainerCreate>

        <h2>Create a playlist</h2>

        <label>Playlist name </label>
        <input onChange={this.onChangeInputPlayListName} value={this.state.inputPlayListName}/>

        <button onClick={this.createPlayList}>cria lista</button>

        <br/><br/>

    </ContainerCreate>
  );
}

}

export default CreatePlaylist;