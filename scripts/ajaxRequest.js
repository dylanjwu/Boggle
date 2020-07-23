let allWords = [];

//METHOD 1 (fetch, then and async)
async function myFetch() {
    let promise = await fetch('../assets/words.txt')
    return await promise.text();
}

async function splitText(words) {
    allWords = await words.split('\n');
    return await words.split('\n');
}

myFetch().then(text =>
        splitText(text))
    .then(splitted => console.log(splitted))
    .catch(err => console.log(err.message));

//METHOD 2 (fetch and then)
// const promise = fetch('../assets/words.txt').then(response =>
//     response.text()
// ).then(function(words) {
//     allWords = words.split('\n');
// }).catch(err => console.log(err.message));

// promise.then(() => console.log(allWords));


//METHOD 3 (old-school callback)
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