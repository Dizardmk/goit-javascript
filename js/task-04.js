console.log("====== task-04 ======");

const maxLenthString = 40;

const formatString = function (string) {
  return string.length > maxLenthString
    ? string.slice(0, maxLenthString) + "..."
    : string;
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка
console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
