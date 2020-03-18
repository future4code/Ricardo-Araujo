import React from 'react';
import "./TituloSecao.css";

function TituloSecao (props){
    return ( <h1 className="tituloDeSecao">{props.texto}</h1>)
}

export default TituloSecao;