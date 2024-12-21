const weightInput = document.querySelector(".weightInput");
const weightText = document.querySelector(".weight-text");

const heightInput = document.querySelector(".heightInput");
const heightText = document.querySelector(".height-text");

const result = document.querySelector(".result");
const msg = document.querySelector(".msg");

weightText.textContent = weightInput.value;
heightText.textContent = heightInput.value;

setInterval(updateControls, 10);

function updateControls() {
    weightText.textContent = weightInput.value;
    heightText.textContent = heightInput.value;
}

weightInput.addEventListener("change", () => {
    weightText.textContent = weightInput.value;
});

heightInput.addEventListener("change", () => {
    heightText.textContent = heightInput.value;
})

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const bmi = weight / (height * height);
    result.textContent = `${bmi.toFixed(1)}`;
    if (bmi < 20) {
        msg.textContent = "Underweight";
        msg.style.color = "red";
    } else if (bmi > 25) {
        msg.textContent = "Overweight";
        msg.style.color = "orange";
    }  else {
        msg.textContent = "Good!";
        msg.style.color = "green";
    }
}
