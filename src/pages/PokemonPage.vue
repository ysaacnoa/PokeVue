<template>
  <h1 v-if="!pokemon">Espere al reto, por favor...</h1>
  <template v-else>
    <h1 class='glass fade-in' >
      ¿Quien es este pokemon?
    </h1>
    <PokemonPicture 
      :pokemonId="pokemon.id" 
      :showPokemon="showPokemon"/>
    <PokemonOptions 
      :pokemons="pokeArr"
      @selection="checkAnswer"  
    />
    <aside  v-if="showAnswer">
      <h2 class="glass" :class="{'green-text': message.includes('Correcto'), 'red-text': message.includes('Oops')}">{{ message }}</h2>
      <button class="glass-option" @click="newGame">Nuevo juego</button>
    </aside>
    <div class="bubbles">
      <span style="--i:11;"></span>
      <span style="--i:14;"></span>
      <span style="--i:21;"></span>
      <span style="--i:18;"></span>
      <span style="--i:29;"></span>
      <span style="--i:13;"></span>
      <span style="--i:12;"></span>
      <span style="--i:28;"></span>
      <span style="--i:13;"></span>
      <span style="--i:15;"></span>
      <span style="--i:17;"></span>
      <span style="--i:29;"></span>
      <span style="--i:15;"></span>
      <span style="--i:10;"></span>
      <span style="--i:12;"></span>
      <span style="--i:26;"></span>
      <span style="--i:18;"></span>
      <span style="--i:13;"></span>
      <span style="--i:24;"></span>
      <span style="--i:11;"></span>
      <span style="--i:28;"></span>
      <span style="--i:13;"></span>
      <span style="--i:24;"></span>
      <span style="--i:14;"></span>
      <span style="--i:28;"></span>

    </div>
  </template>
</template>


<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import '../css/styles.css'
import getPokemonOptions from '@/helpers/getPokemonOptions' 

export default{
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data(){
    return{
      pokeArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArr(){
      this.pokeArr = await getPokemonOptions() 
      let randomInt = Math.floor(Math.random()*4)
      this.pokemon = this.pokeArr[randomInt]
    },
    checkAnswer(pokemonId){
      this.showPokemon = true
      this.showAnswer = true

      pokemonId === this.pokemon.id ?
      this.message = `Correcto! es ${this.pokemon.name}` :
      this.message = `Oops, era ${this.pokemon.name}`
    },
    newGame(){
      this.pokeArr = [],
      this.pokemon = null,
      this.showPokemon = false,
      this.showAnswer = false,
      this.message = ''

      this.mixPokemonArr()
    }
  },
  mounted(){
    this.mixPokemonArr()
  }
}
</script>

<style scoped>

aside{
  display: flex;
  align-items: center;
  justify-content: center;
}
.glass {
  margin-inline: 1.5rem;
  padding: .75rem; 
  color: #fff; 
  font-weight: bold;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  position: relative; 
  z-index: 2; 

}
h1{
  font-size: 1.75rem;
  padding: .5rem; 
}
h2{
  font-size: 1rem;
  padding: .75rem;
  margin: 0;
}

.glass-option {
  width: 250px;
  padding-top: .25rem;
  padding-bottom: .25rem;
  margin: .75rem;
  color: #ffffff; /* Cambiado a blanco */
  font-weight: bold;
  background-color: #2196f3; /* Verde semi-transparente */
  border-radius: .75rem;
  box-shadow: 0 4px 8px rgba(29, 151, 71, 0.3), 0 8px 16px rgba(29, 151, 71, 0.2); /* Sombreado verde */
  border-right: 2px solid rgba(255, 255, 255, .2);
  border-bottom: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: background-color 0.3s ease; /* Agregado un efecto de transición para suavizar los cambios */
}

.green-text {
  color: #4caf50; /* Color verde */
}

.red-text {
  color: #ff5722; /* Color rojo */
}

@keyframes animate {
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
}
</style>