const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};
let intervalId = null;

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

function onClickStart() {
  refs.start.disabled = true;
  createInterval();
}
function onClickStop() {
  refs.start.disabled = false;
  removeInterval();
}

function createInterval() {
  intervalId = setInterval(function () {
    refs.body.style = `background: ${colors[randomIntegerFromInterval(0, 5)]}`;
  }, 1000);
}
function removeInterval() {
  clearInterval(intervalId);
}
