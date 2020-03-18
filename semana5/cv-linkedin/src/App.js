import React from 'react';
import './App.css';
import TituloSecao from './components/TituloSecao/TituloSecao.js'
import BigCard from './components/BigCard/BigCard.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import ImageButton from './components/ImageButton/ImageButton';

function App() {
  return (
    <div id="container">
    <TituloSecao texto={'Dados Pessoais'} />

    <BigCard img={require("./imagens/Unknown.jpg")} tituloBigCard={'Astrodev'} texto={'Oi, eu sou o Astrodev. sou o chefe dos alunos da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles.'}/>

    <SmallCard img={require("./imagens/email.png")} tipo={'E-mail:'} texto={"future4code@gmail.com"}/>

    <SmallCard img={require("./imagens/home.png")} tipo={'Endereço:'} texto={"Rua do Futuro, 4"}/>
    
    <ImageButton img={require("./imagens/down-chevron.png")} texto={"Ver mais"}/>

    <TituloSecao texto={'Experiências profissionais'} />
    <BigCard img={require("./imagens/future4.png")} tituloBigCard={'Future4'} texto={'Formando desenvolvedores para o futuro'}/>
    <BigCard img={require("./imagens/outsmart.png")} tituloBigCard={'Outsmart'} texto={'Criando apps incríveis para grandes clientes.'}/>

   
    <TituloSecao texto={'Minhas redes sociais'} />
    <ImageButton img={require("./imagens/facebook.png")} texto={"Ver mais"}/>


    </div>
  );
}

export default App;

//cv-linkedin-ricardo.surge.sh