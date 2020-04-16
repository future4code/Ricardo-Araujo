import React from 'react';
import styled from 'styled-components';

import CloseIcon from '@material-ui/icons/Close';
import Checkbox from '@material-ui/core/Checkbox';

import { connect } from "react-redux";
import { deleteTask, taskDone, fetchTasks } from "../actions/allActions"

const ContainerDisplay = styled.div`
`
const DivTaks = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0 10px 0 10px;
`
const Task = styled.p`
  text-decoration: ${props => props.complete ? 'line-through' : 'none'};
`


class Display extends React.Component {

componentDidMount(){
  this.props.fetchTasks()
}

showFilter = ()=>{
  switch(this.props.filter){
    case "none":
      return this.renderAllTasks(this.props.taskList);

    case "pending":
      const pendingTaskList = this.props.taskList.filter((task)=>{
        return (task.done===false);
      })
      return this.renderAllTasks(pendingTaskList);

    case "completed":
      const completedTaskList = this.props.taskList.filter((task)=>{
        return (task.done===true);
      })
      return this.renderAllTasks(completedTaskList);

    default:
      return this.renderAllTasks(this.props.taskList);
  }
}

renderAllTasks=(array)=>{
  const allTasks = array.map((task, index)=>{
    return (
      <DivTaks key={index}>
        <Checkbox checked={task.done} onChange={()=>this.props.taskDone(task.id)}/>
        <Task complete={task.done}>{task.text}</Task>
        <CloseIcon onClick={()=>this.props.deleteTask(task.id)}/>
      </DivTaks>
    )
  })
  return allTasks;
}




render(){

  return (
      <ContainerDisplay>
          {this.showFilter()}
      </ContainerDisplay>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    taskList: state.task.taskList,
    filter: state.filter.filter
  }
}

const mapDispatchToProps = dispatch =>{
  return { 
    deleteTask: id => dispatch(deleteTask(id)),
    taskDone: id => dispatch(taskDone(id)),
    fetchTasks: ()=> dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
