<template>
  <div id="app">
    <board> </board>
  </div>
</template>

<script>
//import Timer from './components/Timer.vue'
import Word from './components/Square.vue'

import * as letters from "../boardLogic.js";

export default {
  name: 'App',
  components: {
    Board,
    //Square, 
    //Word
  },

  data() {
    return {
      allLetters: letters.generateLetters(),
    }
  },

  methods: {

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
