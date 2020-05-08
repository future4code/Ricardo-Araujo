import React from "react";
import {HeaderWrapper} from "./style";
import {week} from "../Planner";
import { connect } from "react-redux";
import {createTask} from "../../actions/task"

export class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            taskForm:{
                text: "",
                day: ""
            }
        }
    }

    handleOnChange = (event) =>{
        const {name, value} = event.target;

        this.setState({taskForm: {...this.state.taskForm, [name] : value}})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.createTask(this.state.taskForm);
    }

    render(){
        return(
            <HeaderWrapper>
                <h1>PLANNER SEMANAL</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        name={"text"}
                        onChange={this.handleOnChange}
                    />
                    <select
                        name={"day"}
                        onChange={this.handleOnChange}>
                            <option></option>
                            {week.map(day=>(
                                <option value={day}>{day}</option>
                            ))}
                    </select>
                    <button type="submit">Criar tafera</button>
                </form>
            </HeaderWrapper>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        createTask: (body) => dispatch(createTask(body))
    }
}

export default connect (null, mapDispatchToProps)(Header);