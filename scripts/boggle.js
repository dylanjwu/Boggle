//Dependencies: scripts: boardLogic.js, graph.js
//      usage: generateLetters() returns 2d array of random letters


// (failed) dictionary API call for checking if word is real    
// let checkWord = require('check-word');
// let words = checkWord('en');

//global vars (updated at initial opening-of-page, termination of game, 
//and addition of word (respectively))

//initial
let game = new Game();
let graph = game.adjList();
let squares = [];
let NumberToSquare = [];

//game
let globalWords = [];
let score = 0;

//word
let globalWordSquares = [];
let globalWord = [];

/* ********** BOARD FUNCTIONS ********** */

function clearBoard() {
    globalWord = [];
    globalWordSquares = [];

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'lightblue';
    }
}

function clearGame() {
    let scoreStatus = document.getElementById('score');
    score = 0;
    scoreStatus.textContent = score;

    //remove all child elements from ul tag
    // https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/#:~:text=Remove%20all%20the%20child%20elements%20of%20a%20DOM%20node%20in,which%20produces%20the%20same%20output.
    let parent = document.querySelector('ul');
    let child = parent.firstElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.firstElementChild;
    }

    NumberToSquare = [];
    clearBoard();
}



function printBoard() {
    console.log(graph.list);
    let board = generateLetters();
    let k = 0;
    console.log('printing board');
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            squares[k].textContent = board[i][j];
            NumberToSquare[k] = squares[k];
            k++;
        }
    }
}

//creates new board, prints, and clears previous data
function shuffle() {
    if (globalWords.length > 0) {
        let yes = confirm("Are you sure you want to end the game?");
        if (!yes) return;
    }
    console.log(globalWords);
    globalWords = [];

    let board = generateLetters();

    clearGame();
    printBoard();
}

/* ********** END OF BOARD FUNCTIONS ********** */



/* ********** SQUARE FUNCTIONS ********** */

//not called and not functional, TO-DO: implement correctly
function allAdjacent() {

    let squareNumber, connects, edges;
    for (let i = 0; i < globalWordSquares.length; i++) {
        connects = false;
        squareNumber = NumberToSquare.indexOf(globalWordSquares[i]);
        console.log(squareNumber);
        edges = graph.list.get(squareNumber);
        console.log(graph.list.get(squareNumber));
        for (let j = i + 1; j < globalWordSquares.length; j++) {
            for (let k = 0; k < edges.length; k++) {
                if (globalWordSquares[j] === edges[k]) {
                    connects = true;
                }
            }
        }
        if (!connects) {
            return false;
        }
    }
    return true;
}

function turnsRed(e) {
    //add data change for globalWord when turns from red to blue
    if (e.target.style.backgroundColor == 'lightblue') {
        e.target.style.backgroundColor = 'red';
        return true;
    }
    e.target.style.backgroundColor = 'lightblue';
    return false;
}

//event for clicking any square
function clickSquares() {
    for (let i = 0; i < squares.length; i++) {
        console.log(squares[i]);
        squares[i].addEventListener('click', function (e) {
            // if (isAdjacent()) {
            console.log(squares[i]);


            //check if adjacent
            // console.log(allAdjacent(squares[i]));
            if (turnsRed(e)) {
                globalWord.push(squares[i].textContent);
                globalWordSquares.push(squares[i]);
            }
            else {
                console.log('delete letter');
                //implement error checking, perhaps
                let index = globalWordSquares.indexOf(squares[i]);
                globalWordSquares.splice(index, 1);
                globalWord.splice(index, 1);
                console.log('index:' + String(index));
                console.log(globalWord);
                console.log(globalWordSquares);
            }

        });
    }
}

/* ********** END OF SQUARE FUNCTIONS ********** */


/* ********** WORD FUNCTIONS ********** */

//returns true if word has already been found
function alreadyFound(word) {
    console.log("in already found");
    for (let i = 0; i < globalWords.length; i++) {
        console.log(globalWords[i]);
        if (globalWords[i] === word) {

            return true;
        }
    }
    console.log('done');
    return false;
}

//conditions for adding word, TO-DO: check if strWord is a word
function addWord(e) {
    let strWord = globalWord.join('').toUpperCase();

    if (strWord.length <= 2) {
        //output too short
        alert("Too short!");
        clearBoard();
        return;
    }
    else if (alreadyFound(strWord)) {
        alert("already found!");
        clearBoard();
        return;
    }

    //modifies html with DOM
    let node = document.createElement("li");
    node.id = strWord;
    node.role = "option";
    let textNode = document.createTextNode(strWord);
    node.appendChild(textNode);
    document.querySelector('ul').appendChild(node);
    score = score + strWord.length - 2;
    let scoreStatus = document.getElementById('score');
    scoreStatus.textContent = score;
    globalWords.push(strWord);


    console.log(globalWord);

    clearBoard();
}

/* ********** END OF WORD FUNCTIONS ********** */


//get squares, invoke event listeners for play/shuffle-button, add-button
//calls event function clickSquares
function main() {
    for (let i = 0; i < 16; i++) {
        let str = 'sq' + String(i + 1);
        let el = document.getElementById(str);
        squares.push(el);
    }

    let shuffleBtn = document.getElementById('shuffle-button');
    let addBtn = document.getElementById('add-button');

    shuffleBtn.addEventListener('click', shuffle);
    clickSquares();
    addBtn.addEventListener('click', addWord);
}

//call main()
main();


//(ignore) videoBox.setAttribute('class', 'showing');
