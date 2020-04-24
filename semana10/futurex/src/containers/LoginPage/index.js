import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {login} from "../../actions/login";


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  // Falta colocar o redirecionar da loggin
  // componentDidMount(){
  //   const token = localStorage.getItem("token");

  //   (token === null && this.props.goTologinScreen())
  // }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    const { email, password } = this.state;
    const { goToAllTrips, login } = this.props

    return (
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button color='primary' onClick={()=>login(email, password)}>Login</Button>
         
        </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
      login: (email, password) => dispatch(login(email, password))
  }
}



export default connect (null, mapDispatchToProps)(LoginPage);
