console.log('====== task-06 ======');

let input;
let total = 0;

do {
  input = +prompt('Введите число');
  total += input;
} while (input !== 0);
alert(`Общая сумма чисел равна ${total}`);
