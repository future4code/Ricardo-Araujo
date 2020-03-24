import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:pink;
    width: 50vw;
    margin: 0 auto;
`

class EtapaFim extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

render(){
    return(
        <Container>
    
           <h1>O FORMULÁRIO ACABOU</h1>
           <br/>
           <p>Muito obrigado por participar! Entraremos em contato!</p>
           <br/>
        </Container>
    );
};

}

export default EtapaFim;