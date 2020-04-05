import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerAddSongs = styled.div`
`

const Header = styled.div`
    display:grid;
    grid-template-columns: 4fr 1fr;
`


class AddSongs extends React.Component {
  constructor(props){
    super(props)
    this.state={
      inputSongName: "",
      inputSongArtist: "",
      inputSongUrl: ""
    }
  }

onChangeInputSongName =(event)=>{
    this.setState({inputSongName: event.target.value});
}
onChangeInputSongArtist =(event)=>{
    this.setState({inputSongArtist: event.target.value});
}
onChangeInputSongUrl =(event)=>{
    this.setState({inputSongUrl: event.target.value});
}

addSong=()=>{
  const body ={
      name: this.state.inputSongName,
      artist: this.state.inputSongArtist,
      url: this.state.inputSongUrl
  };

  axios.post(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.playListId}/songs`,body,{
      headers:{"auth": this.props.user}
  }).then(response =>{
    alert("musica adicionada com sucesso");
    this.setState({inputSongName: "", inputSongArtist:"", inputSongUrl:""})
  }).catch((error)=>{
      alert("algo deu errado ao adicionar a música");
  })
}

deletePlaylist=()=>{
    if(window.confirm('Deseja apagar esta playlist ?')){
        axios.delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.playListId}`,{
            headers:{"auth": this.props.user}
        }).then(response=>{
            this.props.setScreen("home");
        }).catch(error=>{
            alert("não foi possível apagar a playlist")
        })
    }
}

returnToPlaylist=()=>{
    this.props.setScreen("playlist");
}


render(){
  return (
    <ContainerAddSongs>

        <Header>
                <h2>{this.props.playListName}</h2>
        </Header>
       
        <div>
            <label>Name: </label>
            <input onChange={this.onChangeInputSongName} value={this.state.inputSongName}/><br/>
            <label>Artist: </label>
            <input onChange={this.onChangeInputSongArtist} value={this.state.inputSongArtist}/><br/>
            <label>Song url: </label>
            <input onChange={this.onChangeInputSongUrl} value={this.state.inputSongUrl}/><br/>
            <button onClick={this.addSong}>Add song</button>
        </div>

        <button onClick={this.deletePlaylist}>delete this playlist</button>
        <button onClick={this.returnToPlaylist}>back</button>

    </ContainerAddSongs>
  );
}

}

export default AddSongs;