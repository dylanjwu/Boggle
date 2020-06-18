//BOARD LOGIC
function freqDict() {
    let probs = {};
    let letters = "WODSENAATIOCILWGURGLEYKUDZANVEARSELCESPLUTAQuOMBJTBYAILPECAMDORIFXBKOTUDNPINESHVITEGNASOHRMHEFIYE";
    for (let i = 0; i < letters.length; i++) {
        let ch = letters[i];
        if (ch != 'u') {
            if (ch == 'Q') ch = "Qu";
            if (ch in probs) probs[ch] += 1;
            else probs[ch] = 1;
        }
    }
    return probs;
}

function randLetter() {
    let probs = freqDict();
    let letters = [];
    for (let key in probs) {
        let count = probs[key];
        while (count > 0) {
            letters.push(key);
            count--;
        }
    }
    return letters[Math.floor(Math.random() * 95)];
}

function generateLetters() {
    let board = [];
    for (let i = 0; i < 4; i++) {
        let temp = [];
        for (let j = 0; j < 4; j++) {
            temp.push(randLetter());
        }
        board.push(temp);
    }
    return board;
}