let value = +prompt('Введите число');
// value = Number(value);

if (Number.isNaN(value)) { console.log('Вы ввели не число'); }
else {
    if (value % 2 === 0) { console.log(`Число ${value} - четное`); }
    else {console.log(`Число ${value} - НЕчетное`)}
}
