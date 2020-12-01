console.log('====== test ======');

const allowAccess = confirm('Вам исполнилось 18 лет?');

// if (allowAccess === true) {
//   console.log('Добро пожаловать!');
// } else {
//   console.log('В доступе отказано!');
// }

const result =
  allowAccess === true ? 'Добро пожаловать!' : 'В доступе отказано!';
console.log(result);
