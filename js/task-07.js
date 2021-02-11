console.log('\ntask-07: font-size-control');
const divRef = document.querySelector('.js-markup');
divRef.insertAdjacentHTML(
  'beforeend',
  `<br><br><input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span><br><br><br><br><br><br><br><br>`,
);

const inputRef = document.querySelector('#font-size-control');
const range = inputRef.getAttribute('type');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', elem => {
  spanRef.style.fontSize = elem.target.value + 'px';
});
