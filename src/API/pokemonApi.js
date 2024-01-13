import axios from "axios"


const getPokemonURL = axios.create({
  baseURL:`https://pokeapi.co/api/v2/pokemon`
})

export default getPokemonURL