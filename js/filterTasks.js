export function filterTasks() {
  const toDoList = document.querySelectorAll(".To-Do");
  const doingList = document.querySelectorAll(".Doing");
  const doneList = document.querySelectorAll(".Done");
  const filterSelect = document.querySelector("#filter__select");
  const selectedOption = filterSelect.value;
  if (selectedOption === "To-Do") {
    toDoList.forEach((todo) => {
      todo.style.display = "flex";
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
      doing.style.display = "flex";
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
      done.style.display = "flex";
    });
  } else if (selectedOption === "noFilter") {
    toDoList.forEach((todo) => {
      todo.style.display = "flex";
    });
    doingList.forEach((doing) => {
      doing.style.display = "flex";
    });
    doneList.forEach((done) => {
      done.style.display = "flex";
    });
  }
}
