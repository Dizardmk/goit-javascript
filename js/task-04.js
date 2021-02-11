console.log('\ntask-04: Счетчик');
const divRef = document.createElement('div');
divRef.id = 'counter';
divRef.insertAdjacentHTML(
  'beforeend',
  `<button type="button" data-action="decrement">Отнять -1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">Добавить +1</button>`,
);

const jsMarkUp = document.querySelector('.js-markup');
jsMarkUp.appendChild(divRef);

const decrementRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decrementRef.addEventListener('click', () => {
  // if (!counterValue) return; //если необходимо не опускать счетчик ниже нуля
  // return (valueRef.textContent = counterValue -= 1);
  valueRef.textContent = counterValue -= 1;
});
incrementRef.addEventListener('click', () => {
  valueRef.textContent = counterValue += 1;
});
