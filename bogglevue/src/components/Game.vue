<template>
  <div id="game">
      <Square v-for="square in board" 
                :key="square.id"
                 @click-square="addLetter(letter)"  
                 />
      <countdown-timer>  </countdown-timer>
      <button id="add-btn" @click="addWord"> Add Word </button>
  </div>
</template>

<script>
import Square from './components/Square.vue'
import Word from './components/Word.vue'
import CountdownTimer from './components/CountdownTimer.vue'

function freqDict() {
    let probs = {};
    let letters = "WODSENAATIOCILWGURGLEYKUDZANVEARSELCESPLUTAQuOMBJTBYAILPECAMDORIFXBKOTUDNPINESHVITEGNASOHRMHEFIYE";
    for (let i = 0; i < letters.length; i++) {
        let ch = letters[i];
        if (ch != 'u') {
            if (ch == 'Q') ch = "Qu";
            if (ch in probs) probs[ch] += 1;
            else probs[ch] = 1;
        }
    }
    return probs;
}

function randLetter() {
    let probs = freqDict();
    let letters = [];
    for (let key in probs) {
        let count = probs[key];
        while (count > 0) {
            letters.push(key);
            count--;
        }
    }
    return letters[Math.floor(Math.random() * 95)];
}

function generateLetters() {
    let board = [];
    for (let i = 0; i < 4; i++) {
        let temp = [];
        for (let j = 0; j < 4; j++) {
            temp.push(randLetter());
        }
        board.push(temp);
    }
    return board;
}

export default {
  name: 'Game',
  components: {
    Square,
    Word,
    CountdownTimer,
  },
  props: {
      adjMatrix: {
          type: Object,
          required: true,
      },
  },

  data() {
      return {
          word: String,
          score: Number,
          wordsFound: Array,
          lexicon: Array,
          board: Array,
      }
  },

  mounted() {
      let tempBoard;
      tempBoard = generateLetters()
      //map each letter of tempBoard to adjMatrix,
      //and set as value of this.board 

  },

  methods: {

      onEndClick() {
          //event handler
          //tell App component game is over
      },

      addWord() {
          let isRealWord = this.searchCollection(this.lexicion);
          let hasNotBeenFound = !this.searchCollection(this.words);
          let isLongEnough = this.word > 2;

          if(isRealWord && hasNotBeenFound && isLongEnough){
                let wordScore = this.word.length - 2;
                this.score += wordScore;
                this.words.push(this.word);
          }
          this.word = "";
      },    

      searchCollection(collection) {
            for (let realWord of collection) 
                if (this.word === realWord) return true;
            return false;
      },

      addLetter(letter) {
          this.word.push(letter);
      },
    

  }
}
</script>