<template>
  <div>
    <squares
      v-bind:word="this.currentWord"
      v-bind:allLetters="allLetters"
      @letter-add="addLetter(id)"
      @letter-delete="deleteLetter(id)"
    >
    </squares>

    <!-- buttons here -->
  </div>
</template>

<script>
import Squares from "./Squares.vue"
import * as req from "../ajaxRequest.js"

export default {
  components: {
    Squares,
  },
  props: {
    allLetters: {
      type: array,
      required: true,
    },
  },

  data() {
    return {
      realWords: req.main(),
      currentWord: {},
    };
  },

  methods: {
    addLetter: function(id) {
      /*
          ADD TO currentWord dictionary

          globalWord.push(squares[i].textContent);
          globalWordSquares.push(squares[i]);
          */
    },

    deleteLetter: function(id) {
      /*
            DELETE FROM currentWord dictionary

            let index = globalWordSquares.indexOf(squares[i]);
            globalWordSquares.splice(index, 1);
            globalWord.splice(index, 1);
            console.log("index:" + String(index));
            console.log(globalWord);
            console.log(globalWordSquares);
            */
    },

    isWord: function(possibleWord) {
        for (let word of this.realWords) {
            if (word === possibleWord) {
                return true;
            }
        }
        return false;
    },

    /*
    function addWord(e) {
    let strWord = globalWord.join('').toUpperCase();
    if (strWord.length <= 2 || !isWord(strWord.toLowerCase())) {
        turnRed();
        updateAddBtnColor('lightblue');
        setTimeout(clearBoard, 30);
        return;
    } else if (alreadyFound(strWord)) {
        // alert("already found!");
        updateAddBtnColor('lightblue');
        let children = document.querySelector('ul').childNodes;
        console.log(children);
        for (let child of children) {
            if (child.textContent === strWord) {
                child.style.backgroundColor = 'red';
                // child.style.color = 'red';
                setTimeout(function() {
                    child.style.backgroundColor = 'white';
                    // child.style.color = 'black';
                }, 30);
            }
        }
        clearBoard();
        return;
    }
    */

    checkWord: function() {
      //called when add button clicked

    },

    updateAddBtnColor: function(color) {
      let btn = document.getElementById("add-button");
      btn.style.backgroundColor = color;
    },
  },
};
</script>
