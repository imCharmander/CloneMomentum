const clock = document.querySelector("h2#clock");
const brightness = document.querySelector(".brightness");

function updateClock() {
  const date = new Date();
  birght = date.getHours();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  if (birght > 8 && birght < 18) {
    brightness.classList.remove("dark");
  } else {
    brightness.classList.add("dark");
  }
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
