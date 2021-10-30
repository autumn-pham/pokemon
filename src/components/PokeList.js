import React from 'react';


const PokeList = ({pokemon, handleClick}) => {
  return(
    <div className="display-left">
      {pokemon.map(({ name, url}) => {
        return (
          <div>
            <ul className="pokelist">
              <li><button onClick={handleClick} className="pokemon-btn">{name}</button></li>
            </ul>
          </div>
        )
      })
      }
    </div>
  )
}

export default PokeList;
