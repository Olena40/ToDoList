const inputField = document.querySelector("#myInput");
const onClickField = document.querySelector("button");
const addBtn = document.querySelector(".addBtn");
const myUl = document.querySelector("#myUl");
const deleteAllBtn = document.querySelector(".footerBtn");

const addTask = () => {
	myUl.innerHTML += `<li> ${inputField.value}  
    <button onclick="checkTask(this)"> <i class="fas fa-check-double"></i> </button>
    <button onclick="editTask(this)"> <i class="fas fa-edit"></i> </button>
    <button onclick="deleteTask(this)"> <i class="far fa-trash-alt"></i></button>
     </li>`;
	inputField.value = "";
};

const checkTask = (event) => {
	event.parentElement.toggle();
};

const editTask = (event) => {
	event.parentElement.edit();
};

const deleteTask = (event) => {
	event.parentElement.remove();
};


addBtn.addEventListener("click", addTask);