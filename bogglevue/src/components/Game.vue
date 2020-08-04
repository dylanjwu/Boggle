<template>
  <div id="game">
      <square> </square>
      <word> </word>
      <countdown-timer>  </countdown-timer>
      
  </div>
</template>

<script>
import Square from './components/Square.vue'
import Word from './components/Word.vue'
import CountdownTimer from './components/CountdownTimer.vue'

export default {
  name: 'Game',
  components: {
    Square,
    Word,
    CountdownTimer,
  },
  data() {
      return {
          word: String,
          score: Number,
          wordsFound: Array,
          lexicon: Array,
      }
  },
  methods: {
      onAddClick() {
          //call this.addWord 
      },

      onEndClick() {
          //event handler
          //tell App component game is over
      },

      addWord() {
          //if
            //call this.checkWordValidity
            //call this.checkWordLength
            //then
                //call this.calculateWordScore
                //call this.updateTotalScore
          
          //when add button clicked
          //this.wordsFound += this.word
      },    

      checkWordValidity() {
          //look in this.lexicon (prop)
          //if the word exists, then return true
          //else false
      },

      checkWordLength() {
          //return true if word.length > 2
          //else false
      },

      calculateWordScore() {
          //perform calculation, return Number
      },

      updateTotalScore() {
          //add valid word score to this.score 
      },

      addLetter() {
          //this.word += emitted letter from square
      },
    

  }
}
</script>