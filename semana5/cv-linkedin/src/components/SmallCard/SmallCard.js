import React from 'react';
import './SmallCard.css';

function SmallCard(props) {
    return (
        <div className="SmallCard">
            <img src={props.img} />
            <p>{props.tipo}</p>
            <p>{props.texto}</p>
        </div>
    )
}

export default SmallCard;