const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
var input = document.getElementById("todo-input");
var counter = document.getElementById("counter");
counter.innerHTML = input.value.length;
counter.innerHTML += "/30"
var a = 0
//COUNT INPUT
input.addEventListener('keyup', function (e) {
    counter.innerHTML += "/30"
    if (input.value.length >= 1 && input.value.length < 10) {
        counter.innerHTML = "0" + input.value.length;
        counter.innerHTML += "/30"
    } else {
        counter.innerHTML = input.value.length;
        counter.innerHTML += "/30"
    }
})

//BUTTON PLUS AFTER CLICK
todoForm.addEventListener('submit', event => {
    event.preventDefault();
    if (todoInput.value.length == 0) {
        document.getElementById("myBtn").click();
        event.preventDefault();
    } else {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
        console.log("2")
        if (temp == 0) {
            document.querySelectorAll('.todo-controls').forEach(element => {
                element.style['background-color'] = '#333';
                element.style['color'] = 'white';
            });
        } else {
            document.querySelectorAll('.todo-controls').forEach(element => {
                element.style['background-color'] = 'white';
                element.style['color'] = 'black';
            });
        }
    }

});

//APPENDCHILD AFTER INPUT
function addTodo(text) {
    const todo = document.createElement('li');
    todo.classList.add('todo');
    todo.innerHTML = `<div class="todo-controls">
            <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${text}</span>
        <button class="todo-delete">Delete</button>
        </div>`;
    todoList.appendChild(todo);
}

//FOR CHECKBOX AND DELETE BUTTON
todoList.addEventListener('click', event => {
    if (event.target.classList.contains('todo-checkbox')) {
        event.target.parentElement.parentElement.classList.toggle('completed');
    } else if (event.target.classList.contains('todo-delete')) {
        event.target.parentElement.parentElement.remove();
    }

});
//BEFORRELOAD SAVE LOCAL STORAGE
window.addEventListener('beforeunload', () => {
    const todos = todoList.querySelectorAll('.todo');
    const todoData = [];
    todos.forEach(todo => {
        const text = todo.querySelector('.todo-text').textContent;
        const completed = todo.classList.contains('completed');
        todoData.push({
            text,
            completed
        });
    });
    localStorage.setItem('todos', JSON.stringify(todoData));
});

//FOR GETITEM FROM STORAGE AND PRINT
window.addEventListener('load', () => {
    const todoData = JSON.parse(localStorage.getItem('todos'));
    if (todoData) {
        todoData.forEach(({
            text,
            completed
        }) => {
            addTodo(text);
            const todo = todoList.lastElementChild;
            if (completed) {
                todo.classList.add('completed');
                todo.querySelector('.todo-checkbox').checked = true;
            }
        });
    }
});
// POPUP ALERT
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var temp = 0
    let darkToggle = document.querySelector('#darkToggle');
    darkToggle.addEventListener('click', () => {
        if (temp == 0) { //DARK
            document.body.classList.toggle('dark');
            document.querySelectorAll('.timer-down > button').forEach(button => {
                button.style.color = 'white';
            });
            document.querySelectorAll('.timer-up > button').forEach(button => {
                button.style.color = 'white';
            });
            document.querySelectorAll('.todo-controls').forEach(element => {
                element.style['background-color'] = 'white';
                element.style['color'] = 'black';
            });
            document.querySelector("header").style['background-color'] = "#1c1c1c";
            document.querySelector(".modal-content").style['background-color'] = "white";
            document.querySelector(".modal-content").style['color'] = "black";
            temp = 1
        } else { //LIGHT
            document.body.classList.toggle('dark');
            document.querySelectorAll('.timer-down > button').forEach(button => {
                button.style.color = 'black';
            });
            document.querySelectorAll('.timer-up > button').forEach(button => {
                button.style.color = 'black';
            });
            document.querySelectorAll('.todo-controls').forEach(element => {
                element.style['background-color'] = '#333';
                element.style['color'] = 'white';
            });
            document.querySelector("header").style['background-color'] = "#333";
            document.querySelector(".modal-content").style['background-color'] = "#333";
            document.querySelector(".modal-content").style['color'] = "white";
            temp = 0
        }
    })