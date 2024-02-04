const logoutButton = document.querySelector("#user-info button");
const userName = document.querySelector("#username");

const logoutHandle = () => {
  localStorage.removeItem("toDos");
  localStorage.removeItem("userName");
  window.location.href = "index.html";
};

userName.innerHTML = `유저 이름 : ${localStorage.getItem("userName")}`;

logoutButton.addEventListener("click", logoutHandle);
