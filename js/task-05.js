console.log('\ntask-05: Динамическое изменение при наборе текста в инпуте');
const divRef = document.querySelector('.js-markup');
divRef.insertAdjacentHTML(
  'beforeend',
  `<br><br><input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>`,
);

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
inputRef.addEventListener('input', event => {
  spanRef.textContent = event.target.value;
  if (!event.target.value) {
    spanRef.textContent = 'незнакомец';
  }
});
