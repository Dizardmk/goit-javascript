console.log('\ntask-06: Валидация инпута');
const divRef = document.querySelector('.js-markup');
divRef.insertAdjacentHTML(
  'beforeend',
  `<br><br><input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>`,
);

const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', event => {
  event.target.value.length === +dataLength
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
});
inputRef.addEventListener('focus', () => {
  if (inputRef.classList.contains('invalid'))
    return inputRef.classList.remove('invalid');
  if (inputRef.classList.contains('valid'))
    return inputRef.classList.remove('valid');
});
