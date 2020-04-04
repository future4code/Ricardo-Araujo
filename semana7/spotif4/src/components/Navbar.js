import React from 'react';
import styled from 'styled-components';

const ContainerNavbar = styled.div`
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
      <button onClick={()=>this.onClickChooseScreen("home")} >HOME</button>
      <button onClick={()=>this.onClickChooseScreen("createplaylist")}>CREATE PLAYLIST</button>
      <button onClick={()=>this.onClickChooseScreen("freesongs")}>MÚSICAS GRÁTIS</button>
      <button onClick={()=>this.onClickChooseScreen("search")}>SETTINGS</button>
    </ContainerNavbar>
  );
}

}

export default Navbar;