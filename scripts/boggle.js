//Dependencies: scripts: boardLogic.js, graph.js
//      usage: generateRandomBoard() returns 2d array of random letters


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
// let allWords = [];

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
    let parent, child, scoreStatus;

    updateAddBtnColor('lightblue');
    scoreStatus = document.getElementById('score');
    score = 0;
    scoreStatus.textContent = score;

    //delete all words in list (finds ul tag)
    parent = document.querySelector('ul');
    child = parent.firstElementChild;

    while (child) {
        parent.removeChild(child);
        child = parent.firstElementChild;
    }

    NumberToSquare = [];
    clearBoard();
}


//calls generateRandomBoard() from boardLogic.js file
function printBoard() {
    // console.log(graph.list);
    let board = generateRandomBoard();
    let k = 0;
    // console.log('printing board');
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

    if (globalWords.length > 0 && !timesUp) {
        let yes = confirm("Are you sure you want to end the game?");
        if (!yes) return;
    }

    //delete words found
    globalWords = [];

    let board = generateRandomBoard();

    clearGame();
    printBoard();

    //reset timer or (if not already running) start timer 
    console.log(intervalId);
    if (intervalId) {
        resetTimer(3);
    } else {
        countdownTimer(3);
    }

}

/* ********** END OF BOARD FUNCTIONS ********** */



/* ********** SQUARE FUNCTIONS ********** */


//involves all squares, checks adjacency using graph
function isAdjacent(currentSquare) {

    let squareNumber, edges;
    let lastSquare = globalWordSquares[globalWordSquares.length - 1];


    squareNumber = NumberToSquare.indexOf(currentSquare);
    edges = graph.list.get(squareNumber);

    for (let edge of edges) {
        if (NumberToSquare.indexOf(lastSquare) === edge) {
            console.log(true)
            return true;
        }
    }
    console.log(false)
    return false;
}


function turnsGreen(e) {
    //add data change for globalWord when turns from green to blue
    if (e.target.style.backgroundColor == 'lightblue') {
        e.target.style.backgroundColor = 'lightgreen';
        return true;
    }
    e.target.style.backgroundColor = 'lightblue';
    return false;
}

function updateAddBtnColor(color) {
    let btn = document.getElementById('add-button');
    btn.style.backgroundColor = color;
}

//event listener for each square (looping through squares)
//this is the most confusing, most difficult function
function clickSquares() {

    for (let i = 0; i < squares.length; i++) {
        console.log(squares[i]);
        squares[i].addEventListener('mousedown', function(e) {

            if (timesUp) return;

            let lastLetter = globalWordSquares[globalWordSquares.length - 1];

            console.log(squares[i]);

            //if this is the first square to be highlighted
            //or 
            if (globalWord.length === 0 || isAdjacent(squares[i]) || squares[i] === lastLetter) {
                //if not blue, not already selected, then add letter and square
                if (turnsGreen(e)) {
                    globalWord.push(squares[i].textContent); //probably shouldn't access the textContent, just get board[i][j]
                    globalWordSquares.push(squares[i]);
                } else {
                    console.log(squares[i])
                    console.log(lastLetter)
                    if (squares[i] === lastLetter) {
                        console.log('delete letter');

                        let index = globalWordSquares.indexOf(squares[i]);

                        globalWordSquares.splice(index, 1);
                        globalWord.splice(index, 1);
                        console.log('index:' + String(index));
                        console.log(globalWord);
                        console.log(globalWordSquares);
                    } else {
                        //why is this here? this seems unnecessary...
                        turnsGreen(e);
                    }
                }


            }
            //change style.backgroundColor of addBtn
            if (globalWord.length > 2) updateAddBtnColor('lightgreen')
            else updateAddBtnColor('lightblue');



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

function isWord(possibleWord) {
    for (let word of allWords) {
        if (word === possibleWord) {
            return true;
        }
    }
    return false;
}

function turnRed() {
    for (let square of globalWordSquares)
        square.style.backgroundColor = 'red';
}


//conditions for adding word, TO-DO: check if strWord is a word
function addWord(e) {
    if (timesUp) return;

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

    //modifies html with DOM
    let node = document.createElement("li");
    let textNode = document.createTextNode(strWord);
    let scoreStatus = document.getElementById('score');
    node.id = strWord;
    node.role = "option";
    node.appendChild(textNode);
    document.querySelector('ul').appendChild(node);
    node.style.fontFamily = "sans-serif";
    score = score + strWord.length - 2;
    scoreStatus.textContent = score;
    globalWords.push(strWord);
    updateAddBtnColor('lightblue');

    console.log(globalWord);

    clearBoard();
}


/* ********** END OF WORD FUNCTIONS ********** */

//get squares, invoke event listeners for play/shuffle-button, add-button
//calls event function clickSquares
function main() {
    // startTimer(1);

    console.log(allWords);
    for (let i = 0; i < 16; i++) {
        let str = 'sq' + String(i + 1);
        let el = document.getElementById(str);
        squares.push(el);
    }

    let shuffleBtn = document.getElementById('shuffle-button');
    let addBtn = document.getElementById('add-button');

    shuffleBtn.addEventListener('click', shuffle);

    //turn on off with key press(up/down)
    // document.addEventListener('keydown', e => document.addEventListener('keyup', clickSquares));
    // document.addEventListener('mousedown', clickSquares);
    clickSquares();

    //2 ways to add word: with button or with return key (13)

    addBtn.addEventListener('click', addWord);
    document.addEventListener('keypress', e => {
        //keyCode is deprecated
        if (e.keyCode === 13 && globalWord.length > 0) addWord();
    });

}

//call main()
main();


//(ignore) videoBox.setAttribute('class', 'showing');