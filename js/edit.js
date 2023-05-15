import { displayTasks } from "./Display-Tasks.js";
export function handleEditClick(event) {
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const divCard = event.target.parentNode;
  const name = divCard.querySelector(".Task__Card__Name");
  const description = divCard.querySelector(".Task__Card__Description");
  const deleteButton = divCard.querySelector(".Task__Card__Delete");
  const nameText = name.textContent;
  const descriptionText = description.textContent;
  const dialog = document.createElement("dialog");
  const form = document.createElement("form");
  form.classList.add("dialog-form");
  const labelName = document.createElement("label");
  labelName.classList.add("dialog-label");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("maxlength", "25");
  nameInput.classList.add("dialog-input");
  const labelDescription = document.createElement("label");
  labelDescription.textContent = "Description : ";
  const descriptionInput = document.createElement("input");
  descriptionInput.classList.add("dialog-input");
  descriptionInput.setAttribute("maxlength", "70");
  const submitButton = document.createElement("button");
  submitButton.classList.add("edit-btn");

  // Set dialogBox elements content
  labelName.textContent = "Edit name: ";
  submitButton.textContent = "Save changes";

  // Add element to Document
  form.appendChild(labelName);
  form.appendChild(nameInput);
  form.appendChild(labelDescription);
  form.appendChild(descriptionInput);
  form.appendChild(submitButton);
  dialog.appendChild(form);

  // Set dialogInput with the task to edit
  nameInput.value = storedTasks[deleteButton.id].name;
  descriptionInput.value = storedTasks[deleteButton.id].description;

  // Add eventListener on submitButton to close dialogBox and edit the task
  submitButton.addEventListener("click", () => {
    const newNameText = nameInput.value.trim();
    const newDescriptionText = descriptionInput.value.trim();
    if (newNameText !== "" || newDescriptionText !== "") {
      name.textContent = newNameText;
      description.textContent = newDescriptionText;
      storedTasks[deleteButton.id].name = newNameText;
      storedTasks[deleteButton.id].description = newDescriptionText;
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      displayTasks();
      dialog.close();
    }
  });
  // Add the dialogBox to body
  document.body.appendChild(dialog); // Error if the dialog isn't attached to body
  dialog.showModal(); //showModal() method of the HTMLDialogElement interface displays the dialog as a modal
}
