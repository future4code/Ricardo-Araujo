import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div id="container">
        <header>
            <h1><a href="index.html" >FUTURETUBE</a></h1>
            <input type="text" id="caixa-pesquisa" placeholder="Pesquisa"/>
        </header>

        <div id="main">
        
        <nav>
            <a href=""><p>Início</p></a>
            <a href=""><p>Em alta</p></a>
            <a href=""><p>Inscrições</p></a>
            <a href=""><p>Originais</p></a>
            <a href=""><p>Biblioteca</p></a>
            <a href=""><p>Histórico</p></a>
        </nav>


        <article>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/1.png")}  alt=""></img></a>legenda</div>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/2.png")} alt=""/></a>legenda</div>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/3.png")} alt=""/></a>legenda</div>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/4.png")} alt=""/></a>legenda</div>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/5.png")} alt=""/></a>legenda</div>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/6.png")} alt=""/></a>legenda</div>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/7.png")} alt=""/></a>legenda</div>
            <div><a href="../src/videoplay.html"><img src={require("../src/images/8.png")} alt=""/></a>legenda</div>

        </article>

        </div>



      <footer>2020 | Ricardo Araujo</footer>  
   </div> 
  );
}

export default App;
