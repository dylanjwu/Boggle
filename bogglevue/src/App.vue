<template>
  <div id="app">
    <sign-in> </sign-in>
    <sign-up> </sign-up>
    <game> </game>
  </div>
</template>

<script>
import Game from './components/Game.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    Game,
    SignIn,
    SignUp,
  },
  data() {
    return {
      lexicon: Array,
    }
  },
  methods: {
    endGame() {

    },
    logGame() {

    },
    getLexicon() {
      //fetch request to words.txt file
      //set this.lexicon to words
      //is a prop to game component
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
