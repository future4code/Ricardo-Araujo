import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

import { connect } from "react-redux";

const ContainerDisplay = styled.div`
`
const DivTaks = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0 10px 0 10px;
`


class Display extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

renderAllTasks=()=>{
  const allTasks = this.props.taskList.map((task, index)=>{
    return (
      <DivTaks key={index}>
        <p>{task.text}</p>
        <CloseIcon/>
      </DivTaks>
    )
  })
  return allTasks;
}

render(){
  return (
      <ContainerDisplay>
          {this.renderAllTasks()}
      </ContainerDisplay>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    taskList: state.task.taskList
  }
}

export default connect(mapStateToProps, null)(Display);
