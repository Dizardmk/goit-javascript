console.log('====== task-03 ======');

const findBestEmployee = function (employees) {
  let nameEmployee;
  let statsEmployee = 0;

  for (const key in employees) {
    if (statsEmployee < employees[key]) {
      statsEmployee = employees[key];
      nameEmployee = key;
    }
  }

  return nameEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
