//Todo List
const task = document.getElementById('taskBox');
const newLIst = document.getElementById('taskList');
let myArray = [];

function addTask(){
	let li = document.createElement('li');
	li.innerHTML = task.value;
	newLIst.appendChild(li);
	let erase = document.createElement('button');
	erase.innerHTML = 'DELETE';
	li.appendChild(erase);
	let errand = task.value

	task.value = '';

	let myObject = {
		item: errand,
		id: Math.floor(Math.random() * 100)
	};
	myArray.push(myObject)

	addItem();
}

function addItem(){
	let objString = JSON.stringify(myArray);
	localStorage.setItem("todo", newLIst.innerHTML);
}

function showItem(){
	newLIst.innerHTML = localStorage.getItem("todo");
}
showItem();

function clearAll(){
	newLIst.innerHTML = localStorage.removeItem("todo");
}

newLIst.addEventListener("click", function(e){
	if (e.target.tagName === "BUTTON") {
		e.target.parentElement.remove();
	}
});




