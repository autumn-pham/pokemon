import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import PokeList from './PokeList';
import Page from './Page';
import PokeDetail from './PokeDetail';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=25&offset=25");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState();
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
      // setPokemon(res.data.results.map(p => p.name))

      let newPokemonData = {}
      let { data } = res
      let { results } = data
      results.forEach((pokemon, index) => {
        newPokemonData = {
          id: index + 1,
          name: pokemon.name,
          url: pokemon.url
        }
      })

      setPokemonData(newPokemonData)

  //
      setPokemon(res.data.results);
  //     setSelectedUrl(res.data.results.map(u => u.url))
    })
  //   // console.log(pokemonData
      console.log(pokemon);
  //
  //   // make sure any calls to axios if multiple are made before the request is completed gets cancelled
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
   .get(`${pokemonData.url}`)
   .then(res => {
     setSelectedPokemon(res.data)
     // console.log(res.data)
   })
 }

 const resetClick = () => {
   setSelectedPokemon(undefined)
 }

    return (
      <div className='container'>
        <h1>Pokémon: Gotta catch em all! <img src="data:image/png;base64,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" alt="pokeball" className="pokeball-img"></img></h1>
        <div className="pokedex-container">
          <PokeList
            pokemon={pokemon}
            handleClick={handleClick}
          />
          <PokeDetail
            pokemon={selectedPokemon}
            onReset={resetClick}
          />
        </div>
        <Page
          goNextPage={nextPage ? goNextPage : null}
          goPrevPage={prevPage ? goPrevPage : null}
        />
      </div>
    )

};

export default App;
