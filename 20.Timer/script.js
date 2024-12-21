// Elements
const input = document.querySelector("input");
const stopBtn = document.querySelector("#stop");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const timeEl = document.querySelector(".time");

let intervalId = null;
let currentTime = 0;  // In seconds

function updateTime() {
    currentTime--;
    const hours = Math.floor(currentTime / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((currentTime % 3600) / 60).toString().padStart(2, "0");
    const seconds = (currentTime % 60).toString().padStart(2, "0");
    timeEl.textContent = `${hours}:${minutes}:${seconds}`;
    if (currentTime <= 0) {
        stop();
        alert("Time is up!");
    }
}

function start() {
    if (intervalId !== null) return;
    if (currentTime === 0) {
        const inputValue = parseInt(input.value);

        if (isNaN(inputValue) || inputValue <= 0) {
            alert("Please enter a valid time in seconds.");
            return;
        }
        currentTime = inputValue;
    }
    intervalId = setInterval(updateTime, 1000);
    updateTime();
    input.value = "";
}

function stop() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function reset() {
    stop();
    currentTime = 0;
    timeEl.textContent = "00:00:00";
    input.value = "";
}