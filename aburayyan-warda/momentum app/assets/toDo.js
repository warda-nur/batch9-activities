// SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// EEVENT LISTENERS

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);

// FUNCTIONS

function addToDo(event) {
  event.preventDefault();
  // to do DIV
  const todoDIV = document.createElement("div");
  todoDIV.classList.add("todo");
  //create LI
  const newToDo = document.createElement("li");
  newToDo.innerText = todoInput.value;
  newToDo.classList.add("todo-item");
  todoDIV.appendChild(newToDo);
  //checked mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDIV.appendChild(completedButton);
  //checked trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDIV.appendChild(trashButton);
  // APPEND TO LIST
  todoList.appendChild(todoDIV);
  // clear toDo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  // delet todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todoInput.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  // check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
// POP UP ----------------------------------------------------------
