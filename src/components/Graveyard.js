const [selectedPokemon, setSelectedPokemon] = useState(null);


const handleClick = ({name}) => {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/{name}`)
  .then(res => {
    setSelectedPokemon(res)
  })
}


// let {data} = res
// let {results} = data
// let newPokemon = {}
//
// results.forEach((pokemon, url) => {
//   newPokemon = {
//     name: pokemon.name,
//     pokemonId: pokemon.url
//   }
// })
// setPokemon(newPokemon)
