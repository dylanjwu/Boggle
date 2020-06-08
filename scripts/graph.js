//GRAPH CLASS
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

    printGraph() {
        let vertices = this.adjList.keys();

        for (let i of vertices) {
            let getVals = this.list.get(i);
            let conc = "";
            for (let j of getVals) {
                conc += j + " ";
            }
            console.log(i + "->" + conc);
        }
    }

    bfs(v) {
        let visited = [];
        for (let i = 0; i < this.numberVerts; i++) {
            visited[0] = false;
        }
        let q = new Queue();
        visited[v] = true;
        q.enqueue(v);
        while (!q.isEmpty()) {
            let front = q.dequeue();
            console.log(current);
            list = this.adjList.get(front);
            for (let j = 0; i < list.length; i++) {
                let node = list[j];
                if (!visited[node]) {
                    visited[node] = true;
                    q.enqueue(node);
                }
            }
        }
    }

    dfs(v) {
        let visited = [];
        for (let i = 0; i < this.numberVerts; i++) {
            visited[0] = false;
        }
        let q = new Stack();
        visited[v] = true;
        q.push(v);
        while (!q.isEmpty()) {
            let top = q.pop();
            console.log(top);
            list = this.list.get(top);

            for (var j = 0; i < list.length; i++) {
                let node = list[j];
                if (!visited[node]) {
                    visited[node] = true;
                    q.push(node);
                }
            }
        }
    }
}



class Game {
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

function mainGraph() {
    let game = new Game();
    // console.log(game.board);
    console.log(game.adjList());
    console.log(game.adjList().get(0));
}

// mainGraph();