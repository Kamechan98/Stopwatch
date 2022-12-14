const startBtn = document.getElementById("button-start");
const stopBtn = document.getElementById("button-stop");
const resetBtn = document.getElementById("reset-button");

let minutes = 00;
let seconds = 00;
let tens = 00;
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let appendMinutes = document.getElementById('minutes');
let interval = null; //till för att lagra timer-värden
let running = false;


// stopBtn.addEventListener('click', stop);
// resetBtn.addEventListener('click', reset);

// Funktion som startar klockan när man trycker på start-knappen

function startTimer () {
    tens++; // Tens är lika med 0, så varje gång den här funktion kör plussar den på 1 på tens
    running = true;
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
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = minutes;
        appendSeconds.innerHTML = "0" + 0;
    }
    if(minutes > 59) {
        appendMinutes.innerHTML = minutes;
    }

}
function startButton() { //funktionen börjar köra när man trycker på start
    
    if(!running){
        interval = setInterval(startTimer, 10); // startBtn.addEventListener('click', start);
    }
  
    
} 

// TO DO: Skapa boolean som avinstillarerar startbutton

function stopButton() { //funktionen börjar köra när man trycker på stop
    running = false;
    clearInterval(interval);
};

function resetButton() {
    running = false;
    minutes = "00";
    seconds = "00";
    tens = "00";
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens; 
};

