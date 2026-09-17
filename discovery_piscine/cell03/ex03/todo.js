const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new_btn");


window.onload = function () {
    loadTodos();
};

newBtn.addEventListener("click", () => {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        addTodo(text.trim());
        saveTodos();
    }
});

//
function addTodo(text) {
    const todoDiv = document.createElement("div");
    todoDiv.textContent = text;


    todoDiv.addEventListener("click", () => {
        if (confirm("remove?")) {
            todoDiv.remove();
            saveTodos();
        }
    });

    //
    ftList.insertBefore(todoDiv, ftList.firstChild);
}

//
function saveTodos() {
    const todos = [];
    const items = ftList.querySelectorAll("div");
    items.forEach(item => todos.push(item.textContent));
    
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT";
}


function loadTodos() {
    const cookies = document.cookie.split("; ");
    const todoCookie = cookies.find(row => row.startsWith("todos="));
    if (todoCookie) {
        try {
            const todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
            for (let i = todos.length - 1; i >= 0; i--) {
                addTodo(todos[i]);
            }
        } catch (e) {
            console.error("Cookie parse error:", e);
        }
    }
}