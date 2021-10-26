import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    .then(res => {
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [])

  return(
    <div>
      Pokemon List <br/>
      {pokemon.map((name) => {
        return (
          <div><li>{name}</li></div>
        )
      })
      }
    </div>
  )
}

export default PokeList;
