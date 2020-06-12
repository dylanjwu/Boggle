//Code will not work, do NOT run

// let d = new Date();
// let startMin = d.getMinutes();
// let startSec = d.getSeconds();
let start = new Date();
let endMin = start.getMinutes() + 1;
//make it 3 mins
function myTimer() {
    let d = new Date();
    let secs, mins;

    console.log(secs);
    console.log(mins);

    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    if (d.getMinutes() === endMin) {
        confirmation = confirm("22 mins");
        endMin += 3;
        return;
    }
    // if(secs === (startS % 60) && mins === Number(startM / 60)) {
    //     // document.getElementById("timer").innerHTML = secs;
    //     alert();
    // }
}

function startTimer() {
    // document.getElementById("timer").innerHTML = '00:00';

    setInterval(myTimer, 1000);

}

startTimer();


{
    /* <script>
        // Set the date we're counting down to
        var current = new Date().getTime();
        var countDownDate = new Date().getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    </script> */
}