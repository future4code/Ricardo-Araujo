import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const ContainerPlayList = styled.div`
`

class PlayList extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

renderAllSongs=()=>{
    if(this.props.playlistId[0] !== undefined){
        const allSongs = this.props.playlistId.map((song,index)=>{
            return (<div key={index}>
                        <span>{song.name}</span>
                        <span onClick={()=>this.deleteSong(song.id)}> x</span>
                        <ReactPlayer height="200px" width="100%" url={song.url} controls={true}/>
                    </div>)
        })
        return allSongs;
    }else{
        return<div>Ainda não foram adicionadas musicas nesta playlist</div>
    }
}

deleteSong=(id)=>{

}



render(){
  return (
    <ContainerPlayList>
        <h2>{this.props.playListName}</h2> 
        {this.renderAllSongs()}
    </ContainerPlayList>
  );
}

}

export default PlayList;