
const input = document.querySelector("input");
const ol = document.querySelector("ol");

function renderTodo() {
    ol.innerHTML = " "
    for (let i = 0; i < arr.length; i++) {        
        ol.innerHTML += `
        <li>
        ${arr[i]}
        <button onclick = "deleteTodo(${i})">delete</button>
        <button onclick = "editTodo(${i})">edit</button>
        </li>
        `
        
    }
}


const arr = [];

function addTodo() {
    arr.push(input.value);
    renderTodo();
    input.value = " "
}




function deleteTodo(index) {
    arr.splice(index , 1)
    renderTodo();
    
}



function editTodo(index) {
    const updateValue = prompt("Enter a new value");
    arr.splice(index , 1 , updateValue);
    renderTodo();
}
















