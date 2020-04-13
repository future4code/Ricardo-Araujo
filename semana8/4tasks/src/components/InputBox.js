import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const ContainerInputBox = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding:10px;
`

const InputTextField = styled(TextField)`
    width:80%;
`



function InputBox() {
  return (
    <ContainerInputBox>
      <InputTextField id="outlined-basic" label="O que precisa ser feito ?" variant="outlined" />
    </ContainerInputBox>
  );
}

export default InputBox;
