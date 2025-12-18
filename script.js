const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <span class="delete">✖</span>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function handleTaskClick(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
  }
}
