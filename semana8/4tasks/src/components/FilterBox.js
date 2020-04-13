import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ContainerFilterBox = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    padding:10px;
`



function FilterBox() {
  return (
    <ContainerFilterBox>
        <Button variant="contained">Marcar todas como completas</Button>
        <Button variant="contained">Todas</Button>
        <Button variant="contained">Pendentes</Button>
        <Button variant="contained">Completas</Button>
    </ContainerFilterBox>
  );
}

export default FilterBox;
