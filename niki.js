// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', "deleteCheck");


//Functions

function addTodo(event) {
    //prevents submitting
    event.preventDefault();
    


    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    //Check Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add("edit-btn")
    todoDiv.appendChild(editButton);
  


    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';  //innerText würde den kompletten <i> tag ausschreiben
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);

    todoInput.value = " ";
    
}