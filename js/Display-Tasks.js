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
    taskCard.classList.add("Task__Card");
    taskCard.classList.add(task.status);
    taskContainer.appendChild(taskCard);
    const taskName = document.createElement("span");
    taskName.setAttribute("class", "Task__Card__Name");
    taskName.textContent = task.name;
    const taskDescription = document.createElement("p");
    taskDescription.setAttribute("class", "Task__Card__Description");
    taskDescription.textContent = task.description;
    const taskDate = document.createElement("span");
    taskDate.setAttribute("class", "Task__Card__Date");
    taskDate.textContent = task.dueDate;
    const timeLeft = document.createElement("span");
    timeLeft.setAttribute("class", "Task__Card__Time");
    timeLeft.textContent = getTimeRemaining(task);
    const taskStatus = document.createElement("select");
    taskStatus.setAttribute("class", "Task__Card__Status");
    const options = ["To-Do", "Doing", "Done"];
    options.forEach((option) => {
      const statusOption = document.createElement("option");
      statusOption.textContent = option;
      taskStatus.appendChild(statusOption);
    });
    taskStatus.value = task.status;
    taskStatus.addEventListener("change", () => {
      task.status = taskStatus.value;
      console.log(task.status);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      taskCard.classList.remove("To-Do");
      taskCard.classList.remove("Doing");
      taskCard.classList.remove("Done");
      taskCard.classList.add(task.status);
    });
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "Task__Card__Delete");
    deleteButton.setAttribute("id", storedTasks.indexOf(task));
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskCard.remove();
      let index = deleteButton.id;
      storedTasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      displayTasks();
    });
    taskCard.appendChild(taskName);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(timeLeft);
    taskCard.appendChild(taskStatus);
    taskCard.appendChild(deleteButton);
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
