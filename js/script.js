import { createTask } from "./Create-Tasks.js";
import { displayTasks } from "./Display-Tasks.js";
import { handleEditClick } from "./edit.js";
import { filterTasks } from "./filterTasks.js";
import { sortTasks } from "./sortTasks.js";

window.addEventListener("load", () => {
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (!storedTasks) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
  displayTasks();
});

let submit = document.querySelector("#task__submit");
submit.addEventListener("click", createTask);

const sortSelect = document.querySelector("#sort__select");
const selectedOption = sortSelect.value;
sortSelect.addEventListener("change", sortTasks);

const filterSelect = document.querySelector("#filter__select");
filterSelect.addEventListener("change", filterTasks);

//---------------------------------------------------------------------

// Sélectionnez le bouton et la div à manipuler
const btnToggle = document.querySelector(".section__taskForm__btnTogglePlus");
const taskFormAnimation = document.querySelector(
  ".section__taskForm__animation"
);

// Ajoutez un écouteur d'événement de clic sur le bouton
btnToggle.addEventListener("click", () => {
  // Vérifiez si la div est actuellement déployée ou non
  const isExpanded = taskFormAnimation.classList.contains("expanded");

  // Ajoutez ou supprimez la classe "expanded" pour activer ou désactiver l'animation
  taskFormAnimation.classList.toggle("expanded", !isExpanded);

  // Modifiez le contenu du bouton en fonction de l'état de déploiement de la div
  if (isExpanded) {
    btnToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
        `;
  } else {
    btnToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
        `;
  }
});
