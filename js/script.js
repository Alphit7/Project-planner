import { createTask } from "./Create-Tasks.js";
import { displayTasks, getTimeRemaining } from "./Display-Tasks.js";
import { getTasks } from "./load-tasks.js";

let submit = document.querySelector("#task__submit");
submit.addEventListener("click", createTask);

const sortSelect = document.querySelector('#sort__select');

window.addEventListener('load', () => {
    sortTasks();
  });
getTasks();
displayTasks();

 let tasks = getTasks();
sortSelect.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  getTasks();
  if (selectedOption === 'nameAsc') {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedOption === 'nameDesc') {
    tasks.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderTasks(tasks);
});

function renderTasks(tasks) {
    const taskContainer = document.querySelector('#taskContainer');
    taskContainer.innerHTML = '';
  
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span>${task.name}</span>
        <p>${task.description}</p>
        <span>${task.dueDate}</span>
        <span>${getTimeRemaining(task)}</span>
        <span>${task.status}</span>
      `;
      taskContainer.appendChild(taskElement);
    });
  }

  function sortTasks() {
    const sortSelect = document.querySelector('#sort__select');
    const selectedOption = sortSelect.value;
    
    if (selectedOption === 'nameAsc') {
      tasks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === 'nameDesc') {
      tasks.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedOption === 'dateasc'){
      tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      tasks.reverse();
    } else if (selectedOption === 'datedesc'){
      tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
  
    renderTasks(tasks);
  }

   sortSelect.addEventListener('change', sortTasks);