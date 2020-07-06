let allWords = [];

const promise = fetch('../assets/words.txt').then(response =>
    response.text()
).then(function(words) {
    allWords = words.split('\n');
}).catch(err => console.log(err.message));

promise.then(() => console.log(allWords));


// function makeRequest(callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', '../assets/words.txt', false);
//     xhr.onload = function() {
//         if (this.status === 200) {
//             callback(this.responseText.split('\n'));
//         }
//     }
//     xhr.send();
// }

// function findWord(words) {
//     allWords = words;
// }

// makeRequest(findWord);
// console.log(allWords);