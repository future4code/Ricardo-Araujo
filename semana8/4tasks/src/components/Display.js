import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const ContainerDisplay = styled.div`
`
const DivTaks = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0 10px 0 10px;
`


function Display() {
  return (
    <ContainerDisplay>
        <DivTaks>
            <p>Use Redux</p>
            <CloseIcon/>
        </DivTaks>
    </ContainerDisplay>
  );
}

export default Display;
