import { createTask } from "./Create-Tasks.js";
import { displayTasks } from "./Display-Tasks.js";
import { tasks } from "./collection.js";

window.addEventListener("load", () => {
  if (!tasks) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
  displayTasks();
});
let submit = document.querySelector("#task__submit");
submit.addEventListener("click", createTask);

const sortSelect = document.querySelector("#sort__select");
const selectedOption = sortSelect.value;
function sortTasks() {
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const sortSelect = document.querySelector("#sort__select");
  const selectedOption = sortSelect.value;
  if (selectedOption === "nameAsc") {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  } else if (selectedOption === "nameDesc") {
    tasks.sort((a, b) => b.name.localeCompare(a.name));
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  } else if (selectedOption === "dateasc") {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    tasks.reverse();
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  } else if (selectedOption === "datedesc") {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  }
}
sortSelect.addEventListener("change", sortTasks);

// function hideToDosOnEnter(event) {
//   if (event.keyCode === 13) {
//     // Check if the enter key was pressed
//     const toDoList = document.querySelectorAll(".To-Do"); // Get all elements with the "To-Do" class
//     toDoList.forEach((todo) => {
//       todo.style.display = "none"; // Hide each element
//     });
//   }
// }
// document.addEventListener("keyup", hideToDosOnEnter);

function filterTasks() {
  const toDoList = document.querySelectorAll(".To-Do");
  const doingList = document.querySelectorAll(".Doing");
  const doneList = document.querySelectorAll(".Done");
  const filterSelect = document.querySelector("#filter__select");
  const selectedOption = filterSelect.value;
  if (selectedOption === "To-Do") {
    toDoList.forEach((todo) => {
      todo.style.display = "block";
    });
    doingList.forEach((doing) => {
      doing.style.display = "none";
    });
    doneList.forEach((done) => {
      done.style.display = "none";
    });
  } else if (selectedOption === "Doing") {
    toDoList.forEach((todo) => {
      todo.style.display = "none";
    });
    doingList.forEach((doing) => {
      doing.style.display = "block";
    });
    doneList.forEach((done) => {
      done.style.display = "none";
    });
  } else if (selectedOption === "Done") {
    toDoList.forEach((todo) => {
      todo.style.display = "none";
    });
    doingList.forEach((doing) => {
      doing.style.display = "none";
    });
    doneList.forEach((done) => {
      done.style.display = "block";
    });
  } else if (selectedOption === "noFilter") {
    toDoList.forEach((todo) => {
      todo.style.display = "block";
    });
    doingList.forEach((doing) => {
      doing.style.display = "block";
    });
    doneList.forEach((done) => {
      done.style.display = "block";
    });
  }
}
const filterSelect = document.querySelector("#filter__select");
filterSelect.addEventListener("change", filterTasks);
