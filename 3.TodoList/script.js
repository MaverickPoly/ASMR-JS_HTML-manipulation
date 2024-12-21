let todos = [
    ["Do workout", false],
    ["Read a book", true],
];
const input = document.querySelector("#todo-title");
const ul = document.querySelector("ul");
renderTodos();

function addTodo() {
    const title = input.value.trim();

    if (title === "") {
        alert("Please enter a title!");
        return;
    }

    todos.push([title, false]);
    input.value = "";
    renderTodos();
}

function toggleTodo(index) {
    todos[index][1] = !todos[index][1];
    renderTodos();
}

function deleteTodo(index) {
    todos = todos.filter((todo, i) => index !== i);
    renderTodos();
}

function renderTodos() {
    document.querySelectorAll("li").forEach((li) => li.remove());
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement("li");
        const div = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todos[i][1];
        checkbox.onclick = () => toggleTodo(i);
        const span = document.createElement("span");
        span.textContent = todos[i][0];
        span.style.textDecoration = todos[i][1] ? "line-through" : null;
        //     text-decoration: line-through;
        const delBtn = document.createElement("button");
        delBtn.classList.add("btn");
        delBtn.classList.add("btn-delete");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteTodo(i);
        div.appendChild(checkbox);
        div.appendChild(span);
        li.appendChild(div);
        li.appendChild(delBtn);
        ul.appendChild(li);
    }
}