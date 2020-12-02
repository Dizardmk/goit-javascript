console.log('====== task-04 ======');

const credits = 23580;
const pricePerDroid = 3000;
const numberОfDroids = prompt(
  'task-04: Какое количество дроидов Вы хотите купить?',
);

if (!numberОfDroids) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = numberОfDroids * pricePerDroid;
  const totalCredits = credits - totalPrice;

  if (totalPrice >= credits) {
    console.log('Недостаточно кредитов на счету!');
  } else {
    console.log(
      `Вы купили ${numberОfDroids} дроидов, на сумму ${totalPrice} кредитов. На счету осталось ${totalCredits} кредитов.`,
    );
  }
}

// const credits = 23580;
// const pricePerDroid = 3000;
// const numberОfDroids = prompt(
//   'task-04: Какое количество дроидов Вы хотите купить?',
// );
// const totalPrice = numberОfDroids * pricePerDroid;
// const totalCredits = credits - totalPrice;

// if (totalPrice >= credits) {
//   console.log('Недостаточно кредитов на счету!');
// } else if (!numberОfDroids) {
//   console.log('Отменено пользователем!');
// } else {
//   console.log(
//     `Вы купили ${numberОfDroids} дроидов, на сумму ${totalPrice} кредитов. На счету осталось ${totalCredits} кредитов.`,
//   );
// }
//  =============================================================================================
// const credits = 23580;
// const pricePerDroid = 3000;
// const numberОfDroids = prompt(
//   'task-04: Какое количество дроидов Вы хотите купить?',
// );
// const totalPrice = numberОfDroids * pricePerDroid;
// const totalCredits = credits - totalPrice;

// if (totalPrice >= credits) {
//   console.log('Недостаточно кредитов на счету!');
// } else if (numberОfDroids !== null) {
//   console.log(
//     `Вы купили ${numberОfDroids} дроидов, на сумму ${totalPrice} кредитов. На счету осталось ${totalCredits} кредитов.`,
//   );
// } else if (numberОfDroids === null) {
//   console.log('Отменено пользователем!');
// }
