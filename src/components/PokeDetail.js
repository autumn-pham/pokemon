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
          <div className="flex-container">
            <h2 className="flex1">{pokemon.name}</h2>
            <button className="btn-close flex2" onClick={onReset}></button>
          </div>
            <img src={pokemon.sprites.front_default} alt="pokemon img"/>
          <div className="pokedetails">
            <p>type: {pokemon.types[0].type.name}</p>
            <p>weight: {pokemon.weight} lbs</p>
            <p>stats:</p>
            {pokemon.stats.map(({base_stat,stat:{name}})=>
            <ul>
              <li>{name}:{base_stat}</li>
            </ul>
            )}
          </div>
        </div>
      )
    }
}

export default PokeDetail;
