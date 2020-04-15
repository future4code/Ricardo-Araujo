import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { setfilter } from "../actions/allActions"

const ContainerFilterBox = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    padding:10px;
`


class FilterBox extends React.Component{
  render(){
    return (
      <ContainerFilterBox>
          <Button variant="contained">Marcar todas como completas</Button>
          <Button variant="contained" onClick={()=>this.props.setfilter("none")}>Todas</Button>
          <Button variant="contained" onClick={()=>this.props.setfilter("pending")}>Pendentes</Button>
          <Button variant="contained" onClick={()=>this.props.setfilter("completed")}>Completas</Button>
      </ContainerFilterBox>
    );
}
}

const mapDispatchToProps = dispatch =>{
  return { 
    setfilter: state => dispatch(setfilter(state)),
  }
}

export default connect(null, mapDispatchToProps)(FilterBox);
