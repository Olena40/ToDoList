const inputField = document.querySelector("#myInput");
const onClickField = document.querySelector("button");
const addBtn = document.querySelector(".addBtn");
const myUl = document.querySelector("#myUl");
const deleteAllBtn = document.querySelector(".footerBtn");

const addTask = () => {
	myUl.innerHTML += `<li> <p style="display: inline-block"> ${inputField.value} </p> 
  <button onclick="deleteTask(this)" class="to-do-btn"> <i class="far fa-trash-alt"></i></button>
  <button onclick="editTask(this)" class="to-do-btn"> <i class="fas fa-edit"></i> </button>
  <button onclick="checkTask(this)" class="to-do-btn"> <i class="fas fa-check-double"></i> </button>
   </li>`;
	inputField.value = "";
};

const checkTask = (event) => {
	console.log(event.parentElement);
	event.parentElement.style.textDecoration = "line-through";
	event.parentElement.style.backgroundColor = "green";
};

const editTask = (event) => {
	const inputField = document.querySelector("#myInput");
	event.parentElement.firstChild.nextSibling.innerHTML = inputField.value;
};

const deleteTask = (event) => {
	event.parentElement.remove();
};

addBtn.addEventListener("click", addTask);
