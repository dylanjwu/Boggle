function generateRandomBoard() {
    const LETTERS = "WODSENAATIOCILWGURGLEYKUDZANVEARSELCESPLUTAQOMBJTBYAILPECAMDORIFXBKOTUDNPINESHVITEGNASOHRMHEFIYE";
    let board = [];
    for (let i = 0; i < 4; i++) {
        let temp = [];
        for (let j = 0; j < 4; j++) {
            let rand_ch = LETTERS[Math.floor(Math.random() * LETTERS.length)];
            if (rand_ch == "Q") {
                temp.push("Qu");
            } else temp.push(rand_ch)
        }
        board.push(temp);
    }
    return board;
}

let board = generateRandomBoard();
console.log(board);