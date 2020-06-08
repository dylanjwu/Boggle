//Code will not work, do NOT run

let d = new Date();
let startMin = d.getMinutes();
    let startSec = d.getSeconds();

//make it 3 mins
function myTimer() {
    let d = new Date();
    let secs, mins;
    
    console.log(secs);
    console.log(mins);
    if(mins == 1){
        return 0;
    }
    document.getElementById("timer").innerHTML ='';
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

// startTimer();
