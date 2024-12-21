const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const label = document.querySelector("h4");

let attempts = 0;
let number = Math.floor(Math.random() * 100);

button.addEventListener("click", () => {
    const guess = parseInt(input.value);
    if (guess == null) {
        label.textContent = "Please enter a valid number";
        return;
    }
    console.log(number);
    console.log(guess);

    attempts++;
    if (guess === number) {
        label.textContent = `Congratulations! You won. The number was ${number}, it took you ${attempts} attempts to find it!`;
    }
    else if (guess < number) {
        label.textContent = `Too low!`;
    } else if (guess > number) {
        label.textContent = `Too high!`;
    }
})


