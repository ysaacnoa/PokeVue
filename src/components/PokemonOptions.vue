<template>
  <section class="options-container">
    <ul>
      <li v-for="pokemon in pokemons"
      class="glass" 
      @click="$emit('selection', pokemon.id)"
      :key="pokemon.id">
      {{ pokemon.name }}
    </li>
    </ul>
  </section>
</template>

<script>
export default{
  props:{
    pokemons:{
      type: Array,
      required: true,
    }
  },

}
</script>

<style scoped>

ul{
  list-style-type: none;

  padding: 0;
}

.glass{
  width: 250px;
  padding-top: .25rem;
  padding-bottom: .25rem;
  margin: .75rem;
  color: aliceblue;
  font-weight: bold;
  background-color: rgba(255,255,255,.1);
  border-radius: .75rem;
  box-shadow: 2px solid rgba(255,255,255,.5);
  border-right: 2px solid rgba(255,255,255,.2);
  border-bottom: 2px solid rgba(255,255,255,.2);
  backdrop-filter: blur(10px);
  cursor: pointer;
}


.options-container{
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

</style>