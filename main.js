const startBtn = document.getElementById("button-start");
const stopBtn = document.getElementById("button-stop");
const resetBtn = document.getElementById("reset-button");

let seconds = 00;
let tens = 00;
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let interval = null; //till för att lagra timer-värden

// startBtn.addEventListener('click', start);
// stopBtn.addEventListener('click', stop);
// resetBtn.addEventListener('click', reset);

// Funktion som startar klockan när man trycker på start-knappen

function startTimer () {
    tens++; // Tens är lika med 0, så varje gång den här funktion kör plussar den på 1 på tens

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++; //Seconds är lika med 0, så varje gång den här funktion kör plussar den på 1 på seconds
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
startBtn.onclick = function() { //funktionen börjar köra när man trycker på start
    interval = setInterval(startTimer, 10);
};

stopBtn.onclick = function() { //funktionen börjar köra när man trycker på stop
    clearInterval(interval);
};

resetBtn.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens; 
};

