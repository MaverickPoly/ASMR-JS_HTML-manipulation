const input = document.querySelector(".name");
const btn = document.querySelector(".submit");


btn.onclick = () => {
    const name = input.value;
    alert(`Hello, your name is ${name}`);
    input.value = "";
}

