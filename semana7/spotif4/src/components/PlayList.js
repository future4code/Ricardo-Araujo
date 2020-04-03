import React from 'react';
import styled from 'styled-components';

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
        const allSongs = this.props.playlistId.map((song)=>{
            return (<div><span>{song.name}</span><span> x</span></div>)
        })
        return allSongs;
    }else{
        return<div>Não temos músicas nesta playlist</div>
    }
}



render(){
  return (
    <ContainerPlayList>
        {this.renderAllSongs()}
    </ContainerPlayList>
  );
}

}

export default PlayList;