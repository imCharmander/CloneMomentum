const userIcon = document.querySelector("#header div:last-child");
const userState = document.querySelector("#user-state");
const userItemsIcon = document.querySelector("#user-state-list .close-icon i");

const userModarOpen = () => {
  userState.style.display = "block";
};

const userModarClose = () => {
  userState.style.display = "none";
};

userItemsIcon.addEventListener("click", userModarClose);
userIcon.addEventListener("click", userModarOpen);
