const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.createElement('ul');
ulRef.id = 'ingredients';

ingredients.forEach(elem => {
  const liRef = document.createElement('li');
  liRef.textContent = elem;
  return ulRef.appendChild(liRef);
});

const jsMarkUp = document.querySelector('.js-markup');
jsMarkUp.appendChild(ulRef);
console.log(
  `\ntask-02: В ul.ingredients вставлено ${ingredients.length} элементов`,
);
