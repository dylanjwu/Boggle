





// let checkWord = require('check-word');
// let words = checkWord('en');

//global vars
let game = new Game();
let graph = game.adjList();
let globalWords = [];
let globalWordSquares = [];
let globalWord = [];
let squares = [];
let score = 0;
let NumberToSquare = [];
let lastSquare = null;

//Dependencies: script: boardLogic.js
//      usage: generateLetters() returns 2d array of random letters



//DOM MANIPULATION

function turnsRed(e) {
    //add data change for globalWord when turns from red to blue
    if (e.target.style.backgroundColor == 'lightblue') {
        e.target.style.backgroundColor = 'red';
        return true;
    }
    e.target.style.backgroundColor = 'lightblue';
    return false;
}

function clearGame() {
    let scoreStatus = document.getElementById('score');
    scoreStatus.textContent = 0;

    //remove all child elements from ul tag
    // https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/#:~:text=Remove%20all%20the%20child%20elements%20of%20a%20DOM%20node%20in,which%20produces%20the%20same%20output.
    let parent = document.querySelector('ul');
    let child = parent.firstElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.firstElementChild;
    }
    lastSquare = null;
    NumberToSquare = [];
    clearBoard();
}



function clearBoard() {
    globalWord = [];
    lastSquare = null;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'lightblue';
    }
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

// function allAdjacent() {
   
//     let squareNumber, connects, edges;
//     for (let i = 0; i < globalWordSquares.length; i++) {
//         connects = false;
//         squareNumber = NumberToSquare.indexOf(globalWordSquares[i]);
//         console.log(squareNumber);
//         edges = graph.list.get(squareNumber);
//         console.log(graph.list.get(squareNumber));
//         for (let j = i + 1; j < globalWordSquares.length; j++) {
//             for (let k = 0; k < edges.length; k++) {
//                 if (globalWordSquares[j] === edges[k]) {
//                     connects = true;
//                 }
//             }
//         }
//         if (!connects) {
//             return false;
//         }
//     }
//     return true;
// }

function clickSquares() {
    for (let i = 0; i < squares.length; i++) {
        console.log(squares[i]);
        squares[i].addEventListener('click', function (e) {
            // if (lastSquare == null || isAdjacent(squares[i], lastSquare)) {
            console.log(squares[i]);


            //check if adjacent
            // console.log(allAdjacent(squares[i]));
            if (turnsRed(e)) {
                globalWord.push(squares[i].textContent);
                globalWordSquares.push(squares[i]);
                lastSquare = squares[i];
            }
            else {
                //implement error checking, perhaps
                let index = globalWordSquares.indexOf(squares[i]);
                globalWordSquares.splice(index, 1);
                globalWord.splice(index, 1);
            }

        });
    }
}

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


function addWord(e) {
    let strWord = globalWord.join('').toUpperCase();
    //TO-DO:
    //check if strWord is a word and not already found
    //words.check(strWord) for true

    if (strWord.length <= 2) {
        //output too short
        alert("Too short!");
        return;
    }
    else if (alreadyFound(strWord)) {
        alert("already found!");
        return;
    }

   
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

main();


//  videoBox.setAttribute('class', 'showing');
