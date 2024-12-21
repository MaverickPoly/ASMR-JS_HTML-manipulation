const input = document.querySelector("input");

function addChar(char) {
    input.value = input.value + char;
}

function percent() {
    try {
        const result = parseFloat(input.value) / 100;
        input.value = result.toString();
    } catch(e) {
        input.value = "Error";
    }
}

function calculate() {
    try {
        const result = eval(input.value);
        input.value = result.toString();
    } catch(e) {
        input.value = "Error";
    }
}


function clearInput() {
    input.value = "";
}

function deleteChar() {
    input.value = input.value.substring(0, input.value.length - 1);
}