import React, { useState, useEffect } from 'react';
import PokeList from './PokeList';

const PokeDetail = ({ pokemon, onClick }) => {
  console.log(pokemon)
  if (pokemon === undefined) {
      return null;
    } else {
      return(
        <div className="card">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} />
          <p>type: {pokemon.types[0].type.name}</p>
          <p>weight: {pokemon.weight} lbs</p>
        </div>
      )
    }

}

export default PokeDetail;
