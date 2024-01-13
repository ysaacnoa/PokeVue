<script>
import PokemonPage from './pages/PokemonPage.vue'

export default{
  name: 'App',
  components: {
    PokemonPage,
  }
}
</script>

<template>
  <PokemonPage/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
