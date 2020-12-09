console.log("====== task-06 ======");

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число");

  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else if (!input) {
    console.log("Вы нажали Cancel");
    break;
  } else {
    numbers.push(Number(input));
  }
}

for (const number of numbers) {
  total += number;
}
alert(`Получился массив [${numbers}]. Общая сумма чисел равна ${total}.`);
