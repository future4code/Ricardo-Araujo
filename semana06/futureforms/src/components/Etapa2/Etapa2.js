import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:pink;
    width: 50vw;
    margin: 0 auto;
`

class Etapa2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            curso: "",
            unidadeDeEnsino: "",
        }
    }

onChangeCurso = event => {this.setState({curso: event.target.value})}
onChangeUnidade = event => {this.setState({unidadeDeEnsino: event.target.value})}


onClickEtapa2 = () =>{

    const novaArray = {curso: this.state.curso, unidadeDeEnsino: this.state.unidadeDeEnsino}

    this.props.funcaoApp(novaArray)
}

render(){
    return(
        <Container>
    
            <label>5. Qual o curso?</label><br/>
            <input onChange={this.onChangeCurso}></input><br/><br/>
            <label>6. Qual a unidade de ensino?</label><br/>
            <input onChange={this.onChangeUnidade}></input><br/><br/>

            <button onClick={this.onClickEtapa2}>enviar</button><br/>
        
        </Container>
    );
};

}

export default Etapa2