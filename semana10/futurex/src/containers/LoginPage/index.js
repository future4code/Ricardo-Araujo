import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

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

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    const { goToHomeAdm, goToAllTrips } = this.props

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
        <Button onClick={goToHomeAdm}>Login</Button>
        <Button onClick={goToAllTrips}>Entrar sem login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
      goToHomeAdm: () => dispatch(push(routes.homeAdm)),
      goToAllTrips: () => dispatch(push(routes.publicTrips))
  }
}



export default connect (null, mapDispatchToProps)(LoginPage);
