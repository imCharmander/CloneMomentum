const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#welcome-message h1");
const main = document.querySelector(".main");
const welcomeMessage = document.querySelector("#welcome-message");

const HIDDEN_CLASSNAME = "hidden";
const DISPLAY_NONE = "none";
const USERNAME_KEY = "userName";

const onLoginSubmit = (event) => {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  hiddenLoginForm();
  paintGreetings();
  setTimeout(() => {
    loginForm.submit();
  }, 4500);
};

const paintGreetings = () => {
  welcomeMessage.classList.remove(HIDDEN_CLASSNAME);
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.classList.add("greeting");
  greeting.innerText = `${userName}`;
};

const hiddenLoginForm = () => {
  loginForm.style.display = DISPLAY_NONE;
};

const localStorageUserName = localStorage.getItem(USERNAME_KEY);
if (localStorageUserName === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  hiddenLoginForm();
  paintGreetings();
  setTimeout(() => {
    loginForm.submit();
  }, 4500);
}
