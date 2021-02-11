const allLiItemRef = document.querySelectorAll('ul#categories>li.item');
console.log(`task-01: В списке ${allLiItemRef.length} категории.\n`);
allLiItemRef.forEach(elem => {
  console.log(
    'Категория:',
    elem.querySelector('li.item>h2').textContent,
    '/ Количество элементов:',
    elem.querySelector('li.item>ul').children.length,
  );
});
