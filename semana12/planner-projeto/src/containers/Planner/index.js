import React from "react";
import { connect } from "react-redux";
import {PlannerWrapper, GridWrapper, DailyWrapper} from "./style";
import Header from "../Header";
import {getTasks} from "../../actions/task";

export const week = ["teste","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]


class Planner extends React.Component {


  componentDidMount(){
    this.props.getTasks();
  }
  

  render() { 
    const{taskList}=this.props

    const newTaskListPerDay = {}

    {taskList[0] && taskList.forEach((task)=>{
          if(newTaskListPerDay[task.day]){
            newTaskListPerDay[task.day].push(task);
          }else{
            newTaskListPerDay[task.day] = [task];
          }
        })
    }

    console.log(newTaskListPerDay)

    return (
      <PlannerWrapper>
        <Header/>
        <GridWrapper>
          {week.map((day)=>(
            <DailyWrapper>
                <p>{day}</p>
                <hr/>
                {newTaskListPerDay[day] && 
                   newTaskListPerDay[day].map((task)=>(
                  <p>{task.text}</p>
                ))}
                
            </DailyWrapper>
          ))}
        </GridWrapper>
      </PlannerWrapper>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    taskList: state.task.taskList
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    getTasks: () => dispatch(getTasks())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Planner);
