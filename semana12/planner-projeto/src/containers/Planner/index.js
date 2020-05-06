import React from "react";
import { connect } from "react-redux";
import {PlannerWrapper} from "./style";
import Header from "../Header";
import {getTasks} from "../../actions/task";

class Planner extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }

  }

  componentDidMount(){
    this.props.getTasks();
  }

  
  


  render() {
    return (
      <PlannerWrapper>
        <Header/>
        <div>BODY</div>
      </PlannerWrapper>
    );
  }
}


const mapStateToProps = (state) =>{
  return{

  }
}


const mapDispatchToProps = dispatch =>{
  return{
    getTasks: () => dispatch(getTasks())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Planner);
