import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { setfilter, deleteAllComplete, taskDone } from "../actions/allActions"

const ContainerFilterBox = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    padding:10px;
`


class FilterBox extends React.Component{

completeAllTasks=()=>{
  const pendingTaskList = this.props.taskList.filter((task)=>{
    return (task.done!== true);
  })

 pendingTaskList.forEach((task)=>{
    return this.props.taskDone(task.id)
  })
}



  render(){
    return (
      <div>
      <ContainerFilterBox>
          <Button variant="contained" onClick={this.completeAllTasks}>Marcar todas como completas</Button>
          <Button variant="contained" onClick={()=>this.props.setfilter("none")}>Todas</Button>
          <Button variant="contained" onClick={()=>this.props.setfilter("pending")}>Pendentes</Button>
          <Button variant="contained" onClick={()=>this.props.setfilter("completed")}>Completas</Button>
      </ContainerFilterBox>
          <Button variant="contained" onClick={this.props.deleteAllComplete}>Apaga completas</Button>
      </div>
    );
}
}

const mapStateToProps = (state) =>{
  return{
    taskList: state.task.taskList
  }
}

const mapDispatchToProps = dispatch =>{
  return { 
    setfilter: state => dispatch(setfilter(state)),
    deleteAllComplete: () => dispatch(deleteAllComplete()),
    taskDone: id => dispatch(taskDone(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);
