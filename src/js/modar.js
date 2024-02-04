const todoListBook = document.querySelector("#todo-list-modar");
const todoList = document.querySelector("#todo-set");
const itemsIcon = document.querySelector(".close-icon i");

const modarHandle = () => {
  if (todoList.style.display === "block") {
    todoList.style.display = "none";
  } else {
    todoList.style.display = "block";
  }
};

const modarClose = () => {
  todoList.style.display = "none";
};

todoListBook.addEventListener("click", modarHandle);
itemsIcon.addEventListener("click", modarClose);
