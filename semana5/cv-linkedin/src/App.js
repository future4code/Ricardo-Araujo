import React from 'react';
import './App.css';
import TituloSecao from './components/TituloSecao/TituloSecao.js'
import BigCard from './components/BigCard/BigCard.js';
import SmallCard from './components/SmallCard/SmallCard.js';

function App() {
  return (
    <div id="container">
    <TituloSecao texto={'Dados Pessoais'} />

    <BigCard img={require("./imagens/Unknown.jpg")} tituloBigCard={'Astrodev'} texto={'Oi, eu sou o Astrodev. sou o chefe dos alunos da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles.'}/>

    <SmallCard img={require("./imagens/Unknown.jpg")} tipo={'E-mail:'} texto={"future4code@gmail.com"}/>

    <SmallCard img={require("./imagens/Unknown.jpg")} tipo={'Endereço:'} texto={"Rua do Futuro, 4"}/>


    </div>
  );
}

export default App;
