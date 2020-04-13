import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerHome = styled.div`

`

const Header = styled.div`
    margin-left:24px;
`


const DivPlaylist = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

const EachPlaylist = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:10px;
    height:180px;
    width: 40%;
    border: 1px solid white;
    img{
        width: 100%;
        height: 75%;
        margin:0;
        padding:0;
    }
`
const DetailsPlayList = styled.div`
    background-color: black;
    height: 25%;
    width:100%;
    margin:0;
    padding:0;
    overflow:hidden;

    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    outline: none;
    border: none;

    :before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 22%, rgba(138,2,33,1) 33%, rgba(120,1,28,1) 74%, rgba(109,0,25,1) 100%);
    transform-origin: center left;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
    }

    :hover {
    cursor: pointer;
    font-weight: bold;
    }

    :hover::before {
    transform-origin: center right;
    transform: scaleX(1);
    }

    
`
const TextDiv = styled.div`
    padding:5px;
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


GetAllPlayList = () =>{
    axios.get("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists", {
        headers: { "auth": this.props.user}
    }).then(response =>{
       this.setState({allPlayList: response.data.result.list});
    }).catch(error=>{
        alert("Erro ao buscar as playlist no servidor")
    })
}

renderPlaylist = () =>{
    let imageNumber = 150;
    const list = this.state.allPlayList.map((song)=>{
        imageNumber = imageNumber+1;
        return <EachPlaylist key={song.id} onClick={()=>this.playListInfo(song.id, song.name)}>
                        <img src={`https://picsum.photos/200/${imageNumber}`} alt={"random internet image"} />
                    <DetailsPlayList>
                        <TextDiv>
                            {song.name}
                        </TextDiv>
                    </DetailsPlayList>
                </EachPlaylist>
    })
    return list;
}


playListInfo=(idOfPlayList, nameOfPlaylist)=>{
    this.props.choosePlaylist(nameOfPlaylist, idOfPlayList);
    this.props.setScreen("playlist");
}

render(){
  return (
    <ContainerHome>
        <Header>
            <h2>Playlists</h2>
        </Header>

       <DivPlaylist>
        { (this.state.allPlayList) && this.renderPlaylist() }
       </DivPlaylist>

    </ContainerHome>
  );
}

}

export default Home;

//deixei aqui para referências futuras
{/* <iframe width="200" height="200" src="https://www.youtube.com/embed/7SJdSDOuVr0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen /> */}