const timeText = document.querySelector("#clock-text");

const intervalId = setInterval(updateTimeText, 1000);

function updateTimeText() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    timeText.textContent = `${hours}:${minutes}:${seconds}`;
}
