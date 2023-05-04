import { displayTasks } from "./Display-Tasks.js";
import { tasks } from "./collection.js";
import { getTasks } from "./load-tasks.js";
import { saveTasks } from "./save-tasks.js";

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

  let newTasksCollection = getTasks();

  newTasksCollection.push(newTask);

  taskNameInput.value = "";
  taskDescriptionInput.value = "";
  taskDateInput.value = "";

  saveTasks(newTasksCollection);
  getTasks();
  displayTasks();
}
