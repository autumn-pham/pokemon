import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Page from './Page';
import PokeDetail from './PokeDetail';

const PokeList = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [pokemonId, setPokemonId] = useState();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    let cancel
    axios
    .get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      setPokemonId(res.data.results.map(id => id.url))
      // console.log(pokemonId);
      let newPokemonData = {}
      res.data.results.forEach((pokemon, url) => {
        newPokemonData = {
          name: pokemon.name,
          pokemonId: pokemon.url
        }
      })
      setPokemonData(newPokemonData)

    })

    // make sure any calls to axios if multiple are made before the request is completed gets cancelled
    return () => {
      cancel()
    }
  }, [currentPage])

  // function call to go to next pg
  const goNextPage = () => {
    setCurrentPage(nextPage)
  }

  // function call to return to prev pg
  const goPrevPage = () => {
    setCurrentPage(prevPage)
  }


 const handleClick = () => {
   axios
   .get(`${pokemonData.pokemonId}`)
   .then(res => {
     setSelectedPokemon(res.data)
     // console.log(res.data)
   })
 }

  return(
    <div>
      Pokemon: Gotta catch em all! <br/>
      {pokemon.map((name) => {
        return (
          <div><li key={pokemon.url}><button onClick={handleClick}>{name}</button></li></div>
        )
      })
      }
      <Page
        goNextPage={nextPage ? goNextPage : null}
        goPrevPage={prevPage ? goPrevPage : null}
      />
      <PokeDetail
        pokemon={selectedPokemon}
        onClick={handleClick}
      />
    </div>
  )
}

export default PokeList;
