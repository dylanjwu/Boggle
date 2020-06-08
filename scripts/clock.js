let d = new Date();
let startMin = d.getMinutes();
    let startSec = d.getSeconds();

//make it 3 mins
function myTimer() {
    let d = new Date();
    let secs, mins;
    secs = d.getSeconds()-startSec;
    mins = mins = d.getMinutes()-startMin;
    
    if(secs === startSec){
        secs = d.getSeconds();
    }

    if(mins === startMin){
        mins = d.getMinutes();
    }
    
    console.log(secs);
    console.log(mins);
    if(mins == 1){
        return 0;
    }
    document.getElementById("timer").innerHTML = '0' + mins + ':0' + secs;
    // if(secs === (startS % 60) && mins === Number(startM / 60)) {
    //     // document.getElementById("timer").innerHTML = secs;
    //     alert();
    // }
}

function startTimer(){
    document.getElementById("timer").innerHTML = '00:00';
    let begin = setInterval(myTimer, 1000);
    // console.log(begin)
    if(begin == 0){
        return;
    }
    
}

startTimer();
