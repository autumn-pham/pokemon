import React from 'react';


const PokeList = ({pokemon, handleClick}) => {
  return(
    <div className="display-left">
      {pokemon.map((name) => {
        return (
          <div>
            <ul className="pokelist">
              <li key={pokemon.url}><button onClick={handleClick} className="pokemon-btn">{name}</button></li>
            </ul>
          </div>
        )
      })
      }
    </div>
  )
}

export default PokeList;
