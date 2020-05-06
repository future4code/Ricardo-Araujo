import React from "react";
import {HeaderWrapper} from "./style";

class Header extends React.Component{
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
        console.log(this.state.taskForm)
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
                            <option value="segunda">Segunda-feira</option>
                            <option value="terca">Terça-feira</option>
                            <option value="quarta">Quarta-feira</option>
                            <option value="quita">Quinta-feira</option>
                            <option value="sexta">Sexta-feira</option>
                            <option value="sexta">Teste</option>
                    </select>
                    <button type="submit">Criar tafera</button>
                </form>
            </HeaderWrapper>
        )
    }



}

export default Header;