<template>
  <div id="app">
    <game> </game>
  </div>
</template>

<script>
import Game from './components/Game.vue'
// import SignIn from './components/SignIn.vue'
// import SignUp from './components/SignUp.vue'

class Graph {
    constructor(vertices) {
        this.numberVerts = vertices;
        this.list = new Map();
    }
    addVertex(v) {
        this.list.set(v, []);
    }
    addEdge(v, w) {
        this.list.get(v).push(w);
    }
}

class Board {
    //dependent on generateLetters() function and Graph class
    constructor() {
        // this.board = generateLetters();
        this.words = {};
        this.score = 0;
        this.graph = new Graph(96);
    }

    adjLogic(i, j) {
        let num = ((4 * i) + j) ;
        let above = num - 4;
        let below = num + 4;
        this.graph.addVertex(num)
        if (i > 0) this.graph.addEdge(num, above);
        if (j > 0) this.graph.addEdge(num, num - 1);
        if (i < 3) this.graph.addEdge(num, below);
        if (j < 3) this.graph.addEdge(num, num + 1);
        if (j < 3 && i < 3) this.graph.addEdge(num, below + 1);
        if (j < 3 && i > 0) this.graph.addEdge(num, above + 1);
        if (j > 0 && i < 3) this.graph.addEdge(num, below - 1);
        if (j > 0 && i > 0) this.graph.addEdge(num, above - 1);
    }

    adjList() {
        // let board = generateLetters();
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.adjLogic(i, j);
            }
        }
        return this.graph;
    }
}


export default {
  name: 'App',
  components: {
    Game,
    // SignIn,
    // SignUp,
  },
  data() {
    return {
      lexicon: Array,
      adjMatrix: Array,
    }
  },
  mounted() {
    let adj = new Board();
    this.adjMatrix = adj.adjList();
    console.log(this.adjMatrix);
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
