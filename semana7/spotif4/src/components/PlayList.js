import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactPlayer from 'react-player';


const ContainerPlayList = styled.div`
`

class PlayList extends React.Component {
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

renderAllSongs=()=>{
//aqui tem um erro conceitual que eu não tive tempo de corrigir, a props passa a lista de musicas
//sendo que o correto seria passar o id da playlist e eu fazer a get no servidor aquim assim eu poderia
//atualizar a lista ao adicionar musicas ou remover musicas

    if(this.props.musicsOfPlayList[0] !== undefined){
        const allSongs = this.props.musicsOfPlayList.map((song,index)=>{
            return (<div key={index}>
                        <span>{song.name}</span>
                        <span onClick={()=>this.deleteSong(song.id)}> x</span>
                        <ReactPlayer height="200px" width="90%" url={song.url} controls={true}/>
                    </div>)
        })
        return allSongs;
    }else{
        return<div>Ainda não foram adicionadas musicas nesta playlist</div>
    }
}

deleteSong=(songId)=>{
    axios.delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.playListId}/songs/${songId}`,{
        headers:{"auth": "ricardo-hamilton"}
    }).then(response=>{
        alert("Musica deletada com sucesso");
        {this.GetAllPlayList()}
    }).catch(error=>{
        alert("não foi possível apagar a música");
    })
}

addSong=()=>{
  const body ={
      name: this.state.inputSongName,
      artist: this.state.inputSongArtist,
      url: this.state.inputSongUrl
  };

  axios.post(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.playListId}/songs`,body,{
      headers:{"auth": "ricardo-hamilton"}
  }).then(response =>{
    {this.renderAllSongs()};
    alert("musica adicionada com sucesso");
  }).catch((error)=>{
      alert("deu bosta")
  })
}

render(){
  return (
    <ContainerPlayList>
        <h2>{this.props.playListName}</h2> 
        {this.renderAllSongs()}

        <div>
            <label>Name: </label>
            <input onChange={this.onChangeInputSongName}/><br/>
            <label>Artist: </label>
            <input onChange={this.onChangeInputSongArtist}/><br/>
            <label>Song url: </label>
            <input onChange={this.onChangeInputSongUrl}/><br/>
            <button onClick={this.addSong}>Add song</button>
        </div>

    </ContainerPlayList>
  );
}

}

export default PlayList;