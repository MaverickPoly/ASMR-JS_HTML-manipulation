const input = document.querySelector("#textInput");
const resultElement = document.querySelector("#result");

function checkPalindrome() {
    const text = input.value.trim().toLowerCase();
    const reversedText = text.split("").reverse().join("");

    if (text === "") {
        resultElement.textContent = "Please enter a valid text.";
        resultElement.style.color = "red";
        return;
    }

    if (text === reversedText) {
        resultElement.textContent = `"${text}" is a palindrome text`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `"${text}" is not a palindrome text`;
        resultElement.style.color = "red";
    }
}