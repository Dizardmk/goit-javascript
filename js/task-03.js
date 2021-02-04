console.log('====== task-03 ======');

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    if (this.items.includes(item)) return;
    this.items.push(item);
  }
  removeItem(item) {
    const index = items.indexOf(item);
    items.splice(index, 1);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
