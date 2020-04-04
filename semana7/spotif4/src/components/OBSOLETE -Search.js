import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerCreate = styled.div`
`



class CreatePlaylist extends React.Component {
  constructor(props){
    super(props)
    this.state={
        inputValue:"",
        allSongs: ""
    }
  }

componentDidMount(){
}
componentDidUpdate(){
}


createPlayst = () =>{
    const body ={
        name: this.state.inputValue
    };
    axios.post("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists", body,{
        headers:{"auth" : "ricardo-hamilton"}
    }).then(response =>{
        alert("deu certo para criar a lista")
    }).catch(error=>{
        alert("não deu certo para criar a lista")
    })

}

onChangeInput =(event)=>{
    this.setState({inputValue: event.target.value});
}


searchPlay=(playlistName)=>{
    axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/search?name=${playlistName}`,{
        headers:{"auth": "milene-hamilton"}
    }).then((response)=>{
        this.getAllSongsOfPlayList(response.data.result.playlist[0].id);
    }).catch((error)=>{
        alert("deu bosta")
    })  
}

getAllSongsOfPlayList=(idOfPlayList)=>{
    console.log(idOfPlayList);
    axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${idOfPlayList}/songs`,{
        headers:{"auth": "milene-hamilton"}
    }).then((response)=>{
        alert("cheguei na busca de musicas")
        console.log(response.data.result.musics)
        this.setState({allSongs: response.data.result.musics})
    }).catch((error)=>{
        alert("não retornou a lista de musicas")
    })
}

renderAllSongs=()=>{
    const allSongs = this.state.allSongs.map((song)=>{
        return (<div>{song.name}</div>)
    })
    return allSongs;
}


render(){
  return (
    <ContainerCreate>
        <label>Playlist name</label>
        <input onChange={this.onChangeInput}/>

        <button onClick={this.createPlayst}>cria lista</button>
        <button onClick={()=>this.searchPlay("AC/DC")}>milene</button>

        { this.state.allSongs && this.renderAllSongs()}

    </ContainerCreate>
  );
}

}

export default CreatePlaylist;