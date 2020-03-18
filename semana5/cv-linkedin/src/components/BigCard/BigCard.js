import React from 'react';
import "./BigCard.css";

function BigCard(props) {
    return (<div class="BigCard">
        <section>
            <img src={props.img}/>
        </section>

        <section>
            <h2>{props.tituloBigCard}</h2>
            <br/>
            <p>{props.texto}</p>
        </section>


    </div>)

}

export default BigCard;