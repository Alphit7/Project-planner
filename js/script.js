import { createTask } from "./Create-Tasks.js";
import { displayTasks } from "./Display-Tasks.js";
import { getTasks } from "./load-tasks.js";

let submit = document.querySelector("#task__submit");
submit.addEventListener("click", createTask);

getTasks();
displayTasks();
