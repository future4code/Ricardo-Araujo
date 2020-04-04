import React from 'react';
import styled from 'styled-components';

const ContainerFreeSongs = styled.div`
`



class FreeSongs extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }


getFreeSongs = ()=>{

  let arrayFreeSongs = []

    for(let i=1;i<101;i++){
      const newSong = [...arrayFreeSongs, `http://spoti4.future4.com.br/${i}.mp3`];
      arrayFreeSongs = newSong;
    }
  
  const renderSongs = arrayFreeSongs.map((song,index)=>{
    const numberSong = (index + 1);
    return (<div key={index}>
              <span>{numberSong}</span>
              <audio controls src={song}/>
            </div>)
  })
  return renderSongs
}




render(){
  return (
    <ContainerFreeSongs>
      <h2>Free Songs</h2>
      {this.getFreeSongs()}
    </ContainerFreeSongs>
  );
}

}

export default FreeSongs;