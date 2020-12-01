console.log('====== task-03 ======');

const adminPassword = 'qwe123';
let message;
message = prompt('task-03: Введите пароль');

// if (message === null) {
//   message = 'Отменено пользователем!';
// } else if (message === adminPassword) {
//   message = 'Добро пожаловать!';
// } else if (message !== adminPassword) {
//   message = 'Доступ запрещен, неверный пароль!';
// }
// alert(message);

if (message === adminPassword) {
  message = 'Добро пожаловать!';
} else if (!message) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
