const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const storedTodos = localStorage.getItem("todos");
if (storedTodos) {
  todoList.innerHTML = storedTodos;
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!todoInput.value) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const todoText = currentTab.url;

      const todoItem = document.createElement("li");
      todoItem.innerHTML = todoText;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add;
      deleteButton.classList.add("delete");
      deleteButton.innerHTML = "&times";
      todoItem.appendChild(deleteButton);

      todoList.appendChild(todoItem);

      localStorage.setItem("todos", todoList.innerHTML);
    });
  } else {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = todoInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add;
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "&times";
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    localStorage.setItem("todos", todoList.innerHTML);

    todoInput.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    todoList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        if (event.target.textContent.startsWith("http")) {
          chrome.tabs.create({ url: event.target.textContent });
        } else {
        }
      }
    });

    event.target.classList.toggle("completed");

    localStorage.setItem("todos", todoList.innerHTML);
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.className === "delete") {
    const todoItem = event.target.parentElement;
    todoList.removeChild(todoItem);

    localStorage.setItem("todos", todoList.innerHTML);
  }
});
