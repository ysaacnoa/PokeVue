import getPokemonURL from "@/API/pokemonApi"


const getPokemons = () =>{

  const pokemonsArr = Array.from(Array(650))
  
  return pokemonsArr.map( (_ , index) => index+1)

}

const getPokemonsOptions = async () =>{

  const mixedPokemons = getPokemons().sort( ()=>Math.random()-0.5)
  
  const pokemons = await getPokemonNames(mixedPokemons.splice(0,4)) 

  return pokemons
}

const getPokemonNames = async ([a,b,c,d] = []) => {
  
  const promiseArr = [a,b,c,d].map(option => getPokemonURL.get(`/${option}`))
  
  const [p1,p2,p3,p4] = await Promise.all( promiseArr )
  
  return [p1,p2,p3,p4].map(poke => (
    {name: poke.data.name, id: poke.data.id}
  )
  )
}

export default getPokemonsOptions