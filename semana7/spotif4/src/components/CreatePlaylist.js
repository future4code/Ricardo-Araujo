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
        inputSongName: "",
        inputSongArtist: "",
        inputSongUrl: ""
    }
  }

componentDidMount(){
}
componentDidUpdate(){
}


onChangeInputPlayListName =(event)=>{
    this.setState({inputPlayListName: event.target.value});
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


createPlayList = () =>{
    const body ={
        name: this.state.inputPlayListName
    };
    axios.post("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists", body,{
        headers:{"auth" : "ricardo-hamilton"}
    }).then(response =>{
        alert("deu certo para criar a lista")
    }).catch(error=>{
        alert("não deu certo para criar a lista")
    })

}

addSong=(playlistId)=>{
    const body ={
        name: this.state.inputSongName,
        artist: this.state.inputSongArtist,
        url: "https://www.youtube.com/watch?v=KR4DjYczINM"
    };

    axios.post(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${playlistId}/songs`,body,{
        headers:{"auth": "ricardo-hamilton"}
    }).then(response =>{
        alert("musica adicionada com sucesso");
    }).catch((error)=>{
        alert("deu bosta")
    })
}


render(){
  return (
    <ContainerCreate>
        <label>Playlist name </label>
        <input onChange={this.onChangeInputPlayListName}/>

        <button onClick={this.createPlayList}>cria lista</button>

        <br/><br/>
        <div>
            <label>Name: </label>
            <input onChange={this.onChangeInputSongName}/><br/>
            <label>Artist: </label>
            <input onChange={this.onChangeInputSongArtist}/><br/>
            <label>Song url: </label>
            <input onChange={this.onChangeInputSongUrl}/><br/>
            <button onClick={()=>this.addSong("778d2496-877d-4a66-8a51-f23540802a45")}>Add song</button>
        </div>

    </ContainerCreate>
  );
}

}

export default CreatePlaylist;