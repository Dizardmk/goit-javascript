console.log('====== task-02 ======');

const total = 100;
const ordered = 50;
const result =
  total >= ordered
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
console.log(`Количество товаров на складе (total): ${total}`);
console.log(`Единиц товара в заказе (ordered): ${ordered}`);
console.log(result);

// const total = 100;
// const ordered = 50;
//
// if (total >= ordered) {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// } else if (total <= ordered) {
//   console.log('На складе недостаточно товаров!');
// }
//  ============================================================
// if (total >= ordered) {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// } else {
//   console.log('На складе недостаточно товаров!');
// }
