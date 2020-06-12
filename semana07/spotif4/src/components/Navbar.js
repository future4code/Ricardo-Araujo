import React from 'react';
import styled from 'styled-components';

const ContainerNavbar = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
`

const IconsImg = styled.img`
  height:30px;
`


class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }



onClickChooseScreen=(value)=>{
    this.props.setScreen(value)
}

render(){
  return (
    <ContainerNavbar>

      <IconsImg src={require("../icons/album.png")} alt="home"
                onClick={()=>this.onClickChooseScreen("home")} />

      <IconsImg src={require("../icons/playlist.png")} alt="crete-play-list"
                onClick={()=>this.onClickChooseScreen("createplaylist")}/>

      <IconsImg src={require("../icons/free-music.png")} alt="free-songs" 
                onClick={()=>this.onClickChooseScreen("freesongs")}/>

      <IconsImg src={require("../icons/logo-spotify.png")} alt="spotify" 
                onClick={()=>this.onClickChooseScreen("spotify")}/>

      <IconsImg src={require("../icons/technical-support.png")} alt="settings"
                onClick={()=>this.onClickChooseScreen("settings")}/>

    </ContainerNavbar>
  );
}

}

export default Navbar;