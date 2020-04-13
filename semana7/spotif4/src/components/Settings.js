import React from 'react';
import styled from 'styled-components';

const ContainerSettings = styled.div`
`


class Settings extends React.Component {
  constructor(props){
    super(props)
    this.state={
        userName:""
    }
  }

onChangeInputUserName=(event)=>{
    this.setState({userName: event.target.value})
}

loggin=()=>{
  if(window.prompt("password")==="ok!"){
    this.props.changeUser(this.state.userName);
  }
  this.setState({userName: ""});
}

render(){
    console.log(this.state.userName);
  return (
    <ContainerSettings>
        <h2>Settings</h2>
        <br/><br/>
        <label>Username: </label>
        <input onChange={this.onChangeInputUserName} value={this.state.userName}/><br/>
        <button onClick={this.loggin}>Loggin</button>
    </ContainerSettings>
  );
}

}

export default Settings;