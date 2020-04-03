import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerHome = styled.div`
`


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
        allPlayList:""
    }
  }

componentDidMount(){
    {this.GetAllPlayList()}
}
componentDidUpdate(){

}

GetAllPlayList = () =>{
    axios.get("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists", {
        headers: { "auth": "ricardo-hamilton"}
    }).then(response =>{
       this.setState({allPlayList: response.data.result.list});
    }).catch(error=>{
        alert("não deu bom")
    })
}

renderPlaylist = () =>{
    const list = this.state.allPlayList.map((song)=>{
        return <div key={song.id}>
                    <span onDoubleClick={()=>this.playListInfo(song.id)}>{song.name}</span> 
                    <span onClick={()=>this.deletePlaylist(song.id)}>X</span>
                </div>
    })
    return list;
}

deletePlaylist=(id)=>{
    axios.delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`,{
        headers:{"auth": "ricardo-hamilton"}
    }).then(response=>{
        alert("deletei a playlist")
        {this.GetAllPlayList()}
    }).catch(error=>{
        alert("não foi possível apagar a playlist")
    })
}

playListInfo=(idOfPlayList)=>{
    axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${idOfPlayList}/songs`,{
        headers:{"auth": "ricardo-hamilton"}
    }).then((response)=>{
        alert("cheguei na busca de musicas")
        this.props.choosePlaylist(response.data.result.musics);
        this.props.setScreen("playlist");
           
    }).catch((error)=>{
        alert("não retornou a lista de musicas")
    })
}




render(){
  return (
    <ContainerHome>
      { (this.state.allPlayList) && this.renderPlaylist() }
    </ContainerHome>
  );
}

}

export default Home;