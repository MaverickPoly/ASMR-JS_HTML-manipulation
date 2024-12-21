const minus = document.getElementById("minus");
const add = document.getElementById("plus");
const value = document.querySelector("#counter-value");

minus.addEventListener("click", () => {
    const current = parseInt(value.innerHTML) - 1;
    if (current >= 0) {
        value.innerHTML =
            current.toString();
    }
});

add.addEventListener("click", () => {
    value.innerHTML = (parseInt(value.innerHTML) + 1).toString();
});
