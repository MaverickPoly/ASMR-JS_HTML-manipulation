const btn = document.querySelector(".btn");
const dropdown = document.querySelector(".dropdown");


btn.onclick = () => {
    dropdown.classList.toggle("active");
}

