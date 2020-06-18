<template>
  <div>
    <div class="board-wrapper" v-for="square in squares" :key="square.id">
      <div @mousedown="clickSquare" v-bind:id="concat(square.id)">
        {{ square.letter }}
      </div>
    </div>
  </div>
</template>

<script>
import Board from "../board.js";

export default {
  props: {
    //word will have structure array of objects (1 letter): {square.id: letter}
    allLetters: {
      type: Array,
      required: true,
    },
    
    word: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      lastSquare: this.word[word.length - 1],
      squares: {},
      board: new Board(),
      adjList: this.board.adjList().list,
    };
  },

  mounted: {
    setSquares: function() {
      let k = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          this.squares[k].letter = this.allLetters[i][j];
          k++;
        }
      }
    },

    methods: {
      clearBoard: function() {
        for (let i = 0; i < squares.length; i++) {
          //not sure how to do this
          //squares[i].style.backgroundColor = 'lightblue';
        }
      },

      //check that
      //change state of square, remains local to Squares component
      turnsGreen: function(e) {
        //add data change for globalWord when turns from green to blue
        if (e.target.style.backgroundColor == "lightblue") {
          e.target.style.backgroundColor = "lightgreen";
          return true;
        }
        e.target.style.backgroundColor = "lightblue";
        return false;
      },

      /*
    Code for other component, listens to Word (if word length is greater than 2)

    updateAddBtnColor: function(color) {
      let btn = document.getElementById("add-button");
      btn.style.backgroundColor = color;
    }
    */

      isAdjacent: function(id) {
        let edges = adjList.get(id);

        for (let edge of edges) {
          if (this.lastSquare === edge) {
            console.log(true);
            return true;
          }
        }
        console.log(false);
        return false;
      },

      concat: function(id) {
        return "str" + String(id);
      },

      //event listener method
      addLetter: function(e) {
        this.$emit("letter-add", e.id);
      },

      //event listener method
      deleteLetter: function(e) {
        this.$emit("letter-delete", e.id);
      },

      clickSquare: function(e) {
        //should get key (?) of object?
        if (
          this.word.length === 0 ||
          //pass in id of square from event??
          this.isAdjacent(e.id) ||
          e.id === this.lastSquare
        ) {
          if (turnsGreen(e)) {
            //emit {square: letter} to Word component
            console.log("add letter");
            this.addLetter(e);

            /*
          code for Word component
          globalWord.push(squares[i].textContent);
          globalWordSquares.push(squares[i]);
          */
          } else {
            if (e.id === this.lastSquare) {
              //emit to Word component
              this.deleteLetter(e);

              /*
            console.log("delete letter");

            code for Word component
            let index = globalWordSquares.indexOf(squares[i]);
            globalWordSquares.splice(index, 1);
            globalWord.splice(index, 1);
            console.log("index:" + String(index));
            console.log(globalWord);
            console.log(globalWordSquares);
            */
            } else {
              this.turnsGreen(e);
            }
          }
        }
        //change style.backgroundColor of addBtn
        if (word.length > 2) this.updateAddBtnColor("lightgreen");
        else this.updateAddBtnColor("lightblue");
      },
    },
  },
};
</script>
