export function getTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks;
  }