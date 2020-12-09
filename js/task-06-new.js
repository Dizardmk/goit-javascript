let total = 0;

while (true) {
  let input = prompt("Введите число");

  if (!input) {
    alert("Отменено пользователем");
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert("Вы ввели не число, повторите попытку");
    continue;
  }

  total += input;
}
alert(`Общая сумма чисел: ${total}`);

// let total = 0;
// do {
//   let input = prompt("Введите число");
//   if (!input) {
//     alert("Отменено");
//     break;
//   }

//   input = Number(input);
//   total += input;
// } while (true);
// alert(`Общая сумма чисел: ${total}`);
