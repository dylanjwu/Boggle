/*
let endSecs;
let endMins;
let totalSecs;
let totalMins;
let intervalId;

function getTime() {
    let time = new Date();
    let mins = time.getMinutes();
    let secs = time.getSeconds();


    if (totalMins === 0 && totalSecs === 0) {
        alert("done");
        done = true;
        clearInterval(intervalId);
        return;
    }

    if (secs != lastSec) {
        if (totalSecs > 0)
            totalSecs -= 1;
        else {
            totalSecs = 59;
        }

        lastSec = secs;
    }

    if (totalSecs === 59 && totalMins > 0) {
        totalMins -= 1;
    }

    console.log(totalMins);
    console.log(totalSecs);
    if (totalSecs < 10) {
        document.getElementById('timer').textContent = totalMins + ':0' + totalSecs;
    } else {
        document.getElementById('timer').textContent = totalMins + ':' + totalSecs;
    }
}

function startTimer(mins) {
    endTime = new Date();
    endSecs = endTime.getSeconds();
    endMins = endTime.getMinutes();
    lastSec = endSecs;
    totalMins = mins;
    intervalId = setInterval(getTime, 1000);
    console.log('here');
    return;
}
*/
//https://stackoverflow.com/questions/48466361/how-to-reset-javascript-minute-countdown-timer/48466526
let timer;
let intervalId;
let timesUp = false;

function startTimer(duration, display) {
    timer = duration;
    let minutes, seconds;
    intervalId = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        if (seconds === 0 && minutes === 0) {
            console.log("zero");
            display.textContent = "TIME'S UP!";
            //display.style.color = 'red';
            timesUp = true;
            return;
        }

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;



        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function resetTimer(mins) {
    timesUp = false;
    timer = 60 * mins;
}

function countdownTimer(mins) {
    minutes = 60 * mins,
        display = document.getElementById('timer');
    startTimer(minutes, display);
};