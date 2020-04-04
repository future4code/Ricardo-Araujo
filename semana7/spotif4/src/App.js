import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home'
import CreatePlaylist from './components/CreatePlaylist';
import PlayList from './components/PlayList'
import FreeSongs from './components/FreeSongs'

const ContainerApp = styled.div`
  background-color:pink;
  display:flex;
  height:100vh;
  width:100vw;
`
const MobileDisplay = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-end;
  height: 567px;
  width: 375px;
  background-color:white;
  margin:0 auto;
`
const DivNav = styled.div`
  background-color:grey;
  height:60px;
  width: 100%;
`

const DisplayScreen = styled.div`
  overflow-y: scroll;
  height:100%;
`


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      screen: "home",
      playlistId:"",
      playListName:""
    }
  }


setScreen=(buttomValue)=>{
  this.setState({screen: buttomValue});
}

choosePlaylist=(id,name)=>{
  this.setState({playlistId: id, playListName: name});
}

visibleScreen = () =>{
  switch (this.state.screen){
    case "home":
      return <Home setScreen={this.setScreen} 
              choosePlaylist={this.choosePlaylist}/>

    case "createplaylist":
      return <CreatePlaylist/>

    case "playlist":
      return <PlayList playlistId={this.state.playlistId} playListName={this.state.playListName} />

    case "freesongs":
      return <FreeSongs/>

    default:
      return <div>fail</div>
  }
}

render(){
  return (
    <ContainerApp>
      
        <MobileDisplay>
          <DisplayScreen>
            {this.visibleScreen()}
          </DisplayScreen>
            
          
          <DivNav>
            <Navbar setScreen={this.setScreen}/>
          </DivNav>
        </MobileDisplay> 
      
      

    </ContainerApp>
  );
}

}

export default App;
