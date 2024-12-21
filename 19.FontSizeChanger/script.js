const input = document.querySelector(".input");
const text = document.querySelector("p");
const indicator = document.querySelector(".indicator");

input.value = 15;

input.addEventListener("change", () => {
    indicator.textContent = input.value;
   text.style.fontSize = `${input.value}px`;
});