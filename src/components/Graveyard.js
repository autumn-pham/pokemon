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

const [pokeUrl, setPokeUrl] = useState('')

const link = res.data.results.map(l => l.url)
setPokeURL(res.data.results.map(l => l.url))



const pokemonData = []
const pokemon = res.data.results.map(p => ({
  name: p.name,
  url: p.url
}))
