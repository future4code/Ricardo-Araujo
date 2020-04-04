import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactPlayer from 'react-player'

const ContainerHome = styled.div`
`

const EachPlaylist = styled.div`
    border: 1px solid black;
    :hover{
        background-color:purple;
    }
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
        return <EachPlaylist key={song.id} onDoubleClick={()=>this.playListInfo(song.id, song.name)}>
                    <img src={require("../images/Unknown.jpg")} alt={"bob"} />
                    <div>
                        <span>{song.name}</span> 
                        <span onClick={()=>this.deletePlaylist(song.id)}>X</span>
                    </div>
                </EachPlaylist>
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

playListInfo=(idOfPlayList, nameOfPlaylist)=>{
    axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${idOfPlayList}/songs`,{
        headers:{"auth": "ricardo-hamilton"}
    }).then((response)=>{
        alert("cheguei na busca de musicas")
        this.props.choosePlaylist(response.data.result.musics, nameOfPlaylist);
        this.props.setScreen("playlist");
           
    }).catch((error)=>{
        alert("não retornou a lista de musicas")
    })
}




render(){
  return (
    <ContainerHome>
      { (this.state.allPlayList) && this.renderPlaylist() }
      <ReactPlayer height="200px" width="200px" url="https://www.youtube.com/watch?v=7SJdSDOuVr0" controls={true}/>
      {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/7SJdSDOuVr0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen /> */}
    </ContainerHome>
  );
}

}

export default Home;