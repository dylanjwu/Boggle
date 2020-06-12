let allWords = [];

function makeRequest(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../assets/words.txt', false);
    xhr.onload = function() {
        if (this.status === 200) {
            callback(this.responseText.split('\n'));
        }
    }
    xhr.send();
}

function findWord(words) {
    allWords = words;
}

makeRequest(findWord);
// console.log(allWords);