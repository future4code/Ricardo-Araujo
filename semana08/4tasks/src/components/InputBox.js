import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';


import { connect } from "react-redux";
import {createTask} from "../actions/allActions"

const ContainerInputBox = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding:10px;
`

const InputTextField = styled(TextField)`
    width:80%;
`



class InputBox extends React.Component {
  constructor(props){
    super(props)
    this.state={
      inputTask: ""
    }
  }

  onChangeInput=(event)=>{this.setState({inputTask: event.target.value})};

  onKeyDownEnter=(event)=>{
    if(event.key==="Enter"){
      this.props.createTask(this.state.inputTask);
      this.setState({inputTask: ""})
    }
  }

  render(){
    return (
      <ContainerInputBox>
        <InputTextField id="outlined-basic" label="O que precisa ser feito ?" variant="outlined" 
                        onChange={this.onChangeInput} 
                        onKeyDown={this.onKeyDownEnter}
                        value={this.state.inputTask}/>
      </ContainerInputBox>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return { 
    createTask: text => dispatch(createTask(text))
  }
}

export default connect(null, mapDispatchToProps) (InputBox);
