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