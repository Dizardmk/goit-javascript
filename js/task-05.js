console.log('====== task-05 ======');

let price;
let message;
let country = prompt(
  'task-05: Напиши страну для доставки (Китай, Чили, Австралия, Индия, Ямайка)',
);

if (!country) {
  message = 'Отменено пользователем!';
} else {
  switch (country.toLowerCase()) {
    case 'китай': {
      price = 100;
      country = 'Китай';
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    }
    case 'чили': {
      price = 250;
      country = 'Чили';
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    }
    case 'австралия': {
      price = 170;
      country = 'Австралию';
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    }
    case 'индия': {
      price = 80;
      country = 'Индию';
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    }
    case 'ямайка': {
      price = 120;
      country = 'Ямайку';
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    }
    default: {
      message = 'В вашей стране доставка не доступна';
    }
  }
}
alert(message);
