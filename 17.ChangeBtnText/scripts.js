const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

function changeText() {
    const text = input.value;
    if (text !== "") {
        btn.textContent = text;
        input.value = "";
    }
}