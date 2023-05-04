import { tasks } from "./collection.js";

let taskNameInput = document.querySelector("#task__name");
let taskDescriptionInput = document.querySelector("#task__description");
let taskDateInput = document.querySelector("#task__date");
let taskSubmitInput = document.querySelector("#task__submit");
let taskContainer = document.querySelector("#taskContainer");
let today = new Date();

export function displayTasks() {
  taskContainer.innerHTML = "";
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  storedTasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskContainer.appendChild(taskCard);
    const taskName = document.createElement("span");
    taskName.textContent = task.name;
    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    const taskDate = document.createElement("span");
    taskDate.textContent = task.dueDate;
    const timeLeft = document.createElement("span");
    timeLeft.textContent = getTimeRemaining(task);
    const taskStatus = document.createElement("span");
    taskStatus.textContent = "To-Do";
    taskCard.appendChild(taskName);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(timeLeft);
    taskCard.appendChild(taskStatus);
  });
}
function getTimeRemaining(task) {
  const dueDate = new Date(task.dueDate);

  const timeRemaining = dueDate - new Date();

  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));

  if (daysRemaining === 0) {
    return "Dans " + hoursRemaining + " heures";
  } else if (daysRemaining > 1) {
    return "Dans " + daysRemaining + " jours";
  } else {
    return "En retard";
  }
}
