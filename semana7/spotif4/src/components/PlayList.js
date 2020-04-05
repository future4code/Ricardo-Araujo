import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactPlayer from 'react-player';


const ContainerPlayList = styled.div`
`

const Header = styled.div`
    display:grid;
    grid-template-columns: 4fr 1fr;
`

const Balls = styled.div`
    width: 2.6em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

div {
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: #fc2f70;
}
div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}

`

const SongDiv = styled.div`
`


class PlayList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      musicsOfPlayList:"",
      inputSongName: "",
      inputSongArtist: "",
      inputSongUrl: ""
    }
  }

componentDidMount(){
  {this.getPlayListSongs()};
}


getPlayListSongs=()=>{
  axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.playListId}/songs`,{
      headers:{"auth": this.props.user}
  }).then((response)=>{
      this.setState({musicsOfPlayList: response.data.result.musics})
  }).catch((error)=>{
      alert("Error on acess play list info");
  })
}


renderAllSongs=()=>{
    if(this.state.musicsOfPlayList[0] !== undefined){
        const allSongs = this.state.musicsOfPlayList.map((song,index)=>{
            return (<SongDiv key={index}>
                        <div>
                        <p>Music: {song.name}</p>
                        <p>Artist: {song.artist}</p>
                        <span onClick={()=>this.deleteSong(song.id)}>remove song</span>
                        </div>
                        <ReactPlayer height="200px" width="90%" url={song.url} controls={true}/>
                    </SongDiv>)
        })
        return allSongs;
    }else{
        return<div>Ainda não foram adicionadas musicas nesta playlist</div>
    }
}

deleteSong=(songId)=>{
  if(window.confirm('Deseja remover esta musica da sua playlist ?')){
    axios.delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.playListId}/songs/${songId}`,{
        headers:{"auth": this.props.user}
    }).then(response=>{
        alert("Musica removida com sucesso");
        {this.getPlayListSongs()};
    }).catch(error=>{
        alert("não foi possível remover a música");
    })
  }
}


playListSettings=()=>{
    this.props.setScreen("addsongs");
}


render(){
  return (
    <ContainerPlayList>

        <Header>
                <h2>{this.props.playListName}</h2>
            <Balls onClick={this.playListSettings}>
                <div></div>
                <div></div>
                <div></div>
            </Balls>
        </Header>

        {this.renderAllSongs()}

    </ContainerPlayList>
  );
}

}

export default PlayList;