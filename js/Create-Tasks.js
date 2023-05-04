import { displayTasks } from "./Display-Tasks.js";
import { tasks } from "./collection.js";

let taskNameInput = document.querySelector("#task__name");
let taskDescriptionInput = document.querySelector("#task__description");
let taskDateInput = document.querySelector("#task__date");

export function createTask() {
  if (
    !taskNameInput.value ||
    !taskDescriptionInput.value ||
    !taskDateInput.value
  ) {
    return;
  }
  const newTask = {
    name: taskNameInput.value.trim(),
    description: taskDescriptionInput.value.trim(),
    dueDate: taskDateInput.value,
    status: "To-Do",
  };
  tasks.push(newTask);
  console.log(tasks);
  taskNameInput.value = "";
  taskDescriptionInput.value = "";
  taskDateInput.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
