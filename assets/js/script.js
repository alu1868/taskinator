//GOES TO DOM FILE, LOCATES ELEMENT BY ID, GIVES THEM A VARIABLE TO BE MANIPULATED LATER
var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");


//FUNCTION TO ADD ITEM TO LIST
var createTaskHandler = function() {

  //PREVENTS THE PAGE FROM RELOADING AFTER EVERY SUBMIT
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);