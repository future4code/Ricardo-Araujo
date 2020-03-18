import React from 'react';
import "./ImageButton.css";

function ImageButton(props){
    return (
        <div className="ImageButton">
            <img src = {props.img}/>
            <span>{props.texto}</span>
        </div>
    )
}

export default ImageButton;