import React from 'react';
import "../App.css"

const Card = ({pokemon}) => {
    return (
        <div className="card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <p>{pokemon.name}</p>
        </div>
    );
};

export default Card;