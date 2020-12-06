// const value = 24;
// value % 2 === 0
//   ? console.log(`${value} is even`)
//   : console.log(`${value} is odd`);

let value = +prompt('Введите число');
// value = Number(value);

if (Number.isNaN(value)) { alert('Вы ввели не число'); }
else if (!value) { alert('Вы отменили ввод');}
else {
    if (value % 2 === 0) { alert(`Число ${value} - четное`); }
    else {alert(`Число ${value} - НЕчетное`)}
}
