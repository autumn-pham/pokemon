import React from 'react';

const PokeDetail = ({ pokemon, onReset }) => {
  console.log(pokemon)

  if (pokemon === undefined) {
      return(
        <div className="card display-right">
          <h5>Click on a Pokemon to view details!</h5>
        </div>
      );
    } else {
      return(
        <div className="card display-right">
          <button className="btn-close" onClick={onReset}></button>
          <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="pokemon img"/>
            <p>type: {pokemon.types[0].type.name}</p>
            <p>weight: {pokemon.weight} lbs</p>
        </div>
      )
    }
}

export default PokeDetail;
