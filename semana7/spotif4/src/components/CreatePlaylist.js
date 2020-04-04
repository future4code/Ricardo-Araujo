import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerCreate = styled.div`
`



class CreatePlaylist extends React.Component {
  constructor(props){
    super(props)
    this.state={
        inputPlayListName:"",
    }
  }

componentDidMount(){
}
componentDidUpdate(){
}


onChangeInputPlayListName =(event)=>{
    this.setState({inputPlayListName: event.target.value});
}

createPlayList = () =>{
    const body ={
        name: this.state.inputPlayListName
    };
    axios.post("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists", body,{
        headers:{"auth" : "ricardo-hamilton"}
    }).then(response =>{
        alert("deu certo para criar a lista")
    }).catch(error=>{
        alert("não deu certo para criar a lista")
    })

}


render(){
  return (
    <ContainerCreate>
        <label>Playlist name </label>
        <input onChange={this.onChangeInputPlayListName}/>

        <button onClick={this.createPlayList}>cria lista</button>

        <br/><br/>

    </ContainerCreate>
  );
}

}

export default CreatePlaylist;