import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home'
import CreatePlaylist from './components/CreatePlaylist';
import PlayList from './components/PlayList'
import FreeSongs from './components/FreeSongs'
import Settings from './components/Settings';
import Spotify from './components/Spofify';
import AddSongs from './components/AddSongs';

const ContainerApp = styled.div`
  background-color:pink;
  display:flex;
  height:100vh;
  width:100vw;
  align-items:center;
`
const MobileDisplay = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-end;
  height: 567px;
  width: 375px;
  background: linear-gradient(to right, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 19%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 69%, rgba(43,43,43,1) 76%, rgba(17,17,17,1) 89%, rgba(18,18,18,1) 92%, rgba(19,19,19,1) 100%);
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
  display:flex;
  justify-content:center;
  margin:0%;
  padding:0%;
`


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      screen: "home",
      playListName:"",
      playListId:"",
      user:"ricardo-hamilton"
    }
  }


changeUser=(value)=>{
  this.setState({user: value})
}


setScreen=(buttomValue)=>{
  this.setState({screen: buttomValue});
}

choosePlaylist=(name,id)=>{
  this.setState({playListName: name, playListId: id});
}

visibleScreen = () =>{
  switch (this.state.screen){
    case "home":
      return <Home user={this.state.user}
              setScreen={this.setScreen} 
              choosePlaylist={this.choosePlaylist}/>

    case "createplaylist":
      return <CreatePlaylist user={this.state.user}/>

    case "playlist":
      return <PlayList user={this.state.user}
                       playListName={this.state.playListName} 
                       playListId={this.state.playListId}
                       setScreen={this.setScreen} />

    case "addsongs":
      return <AddSongs user={this.state.user}
                       playListName={this.state.playListName} 
                       playListId={this.state.playListId}
                       setScreen={this.setScreen} />

    case "freesongs":
      return <FreeSongs/>
    
    case "settings":
      return <Settings changeUser={this.changeUser}/>
    
    case "spotify":
      return <Spotify/>

    default:
      return this.setScreen("home")
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


//spotif4-ricardo.surge.sh