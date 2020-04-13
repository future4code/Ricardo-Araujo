import React from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';
import Display from './components/Display';
import FilterBox from './components/FilterBox';

import Paper from '@material-ui/core/Paper';

const ContainerApp = styled.div`
  background-color: #bdc3c7;
  height:100vh;
  width:100vw;
  position: absolute;
`
const TitleDiv = styled.div`
  margin: 0 auto;
  width: 60vw;
  text-align:center;
  font-family: 'Helvetica Neue';
  font-size:40px;
  color:#b83f45;
`
const MainContainer = styled(Paper)`
  width: 60vw;
  margin: 0 auto;
`


function App() {
  return (
    <ContainerApp>

      <TitleDiv>
        <h1>4Task</h1>
      </TitleDiv>

      <MainContainer elevation={10}>
        <InputBox/>
        <Display/>
        <FilterBox/>
      </MainContainer>

    </ContainerApp>
  );
}

export default App;

//4tasks-ricardo-hamilton.surge.sh