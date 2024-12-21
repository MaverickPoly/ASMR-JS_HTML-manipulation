const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const text = document.querySelector(".text");


btn.onclick = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    box.style.background = `rgb(${r}, ${g}, ${b})`;
    text.textContent = `(${r}, ${g}, ${b})`;
}
