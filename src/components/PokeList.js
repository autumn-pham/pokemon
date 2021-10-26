import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Page from './Page';


const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

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
    })

    // make sure any calls to axios if multiple are made before the request is completed gets cancelled
    return () => {
      cancel()
    }
  }, [currentPage])

  function goNextPage() {
    setCurrentPage(nextPage)
  }

  function goPrevPage() {
    setCurrentPage(prevPage)
  }

  return(
    <div>
      Pokemon: Gotta catch em all! <br/>
      {pokemon.map((name) => {
        return (
          <div><li key={pokemon.id}>{name}</li></div>
        )
      })
      }
      <Page
        goNextPage={nextPage ? goNextPage : null}
        goPrevPage={prevPage ? goPrevPage : null}
      />
    </div>
  )
}

export default PokeList;
