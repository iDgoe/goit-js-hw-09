const startButton = document.querySelector('[data-start]');
console.log(startButton);
const stopButton = document.querySelector('[data-stop]');
console.log(stopButton);
const body = document.querySelector('body');
console.log(body);

let set = null;

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

function onStart() {
  set = setInterval(getBgColor, 1000);
  startButton.toggleAttribute('disabled');
}

function onStop() {
  clearInterval(set);
  startButton.removeAttribute('disabled');
}

function getBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
