import { createTask } from "./Create-Tasks.js";

let submit = document.querySelector("#task__submit");
submit.addEventListener("click", createTask);
