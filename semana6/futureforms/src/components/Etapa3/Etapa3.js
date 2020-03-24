import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:pink;
    width: 50vw;
    margin: 0 auto;
`

class Etapa3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pqNaoTerminou: "",
            cursoComplementar: "",
        }
    }

onChangePqNaoTerminou = event => {this.setState({pqNaoTerminou: event.target.value})}
onChangeCursoComplementar = event => {this.setState({cursoComplementar: event.target.value})}


onClickEtapa3 = () =>{

    const novaArray = {pqNaoTerminou: this.state.pqNaoTerminou, cursoComplementar: this.state.cursoComplementar}

    this.props.funcaoApp(novaArray)
}

render(){
    return(
        <Container>
    
            <label>5. Por que não terminou um curso de graduação?</label><br/>
            <input onChange={this.onChangePqNaoTerminou}></input><br/><br/>
            <label>6. Fez algum curso complementar ?</label><br/>
            <select onChange={this.onChangeCursoComplementar} value={this.state.cursoComplementar} required>
                    <option value="Curso técnico">Curso técnico</option>
                    <option value="Curso de inglês">Curso de inglês</option>
                    <option value="Não fiz curso complementar">Não fiz curso complementar</option>
            </select><br/><br/>

            <button onClick={this.onClickEtapa3}>enviar</button><br/>
        
        </Container>
    );
};

}

export default Etapa3