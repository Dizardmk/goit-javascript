const ulRef = document.createElement('ul');
ulRef.id = 'categories';

// Animal
const liForAnimalRef = document.createElement('li');
liForAnimalRef.classList.add('item');
const h2AnimalRef = document.createElement('h2');
h2AnimalRef.textContent = 'Животные';
const ulAnimalRef = document.createElement('ul');
const liAnimalCatRef = document.createElement('li');
liAnimalCatRef.textContent = 'Кот';
const liAnimalHamsterRef = document.createElement('li');
liAnimalHamsterRef.textContent = 'Хомяк';
const liAnimalHorseRef = document.createElement('li');
liAnimalHorseRef.textContent = 'Лошадь';
const liAnimalParrotRef = document.createElement('li');
liAnimalParrotRef.textContent = 'Попугай';

// Product
const liForProductRef = document.createElement('li');
liForProductRef.classList.add('item');
const h2ProductRef = document.createElement('h2');
h2ProductRef.textContent = 'Продукты';
const ulProductRef = document.createElement('ul');
const liProductBreadRef = document.createElement('li');
liProductBreadRef.textContent = 'Хлеб';
const liProductParsleyRef = document.createElement('li');
liProductParsleyRef.textContent = 'Петрушка';
const liProductСottageСheeseRef = document.createElement('li');
liProductСottageСheeseRef.textContent = 'Творог';

// Tech
const liForTechRef = document.createElement('li');
liForTechRef.classList.add('item');
const h2TechRef = document.createElement('h2');
h2TechRef.textContent = 'Технологии';
const ulTechRef = document.createElement('ul');
const liTechHtmlRef = document.createElement('li');
liTechHtmlRef.textContent = 'HTML';
const liTechCssRef = document.createElement('li');
liTechCssRef.textContent = 'CSS';
const liTechJsRef = document.createElement('li');
liTechJsRef.textContent = 'JavaScript';
const liTechReactRef = document.createElement('li');
liTechReactRef.textContent = 'React';
const liTechNodeRef = document.createElement('li');
liTechNodeRef.textContent = 'Node';

ulRef.append(liForAnimalRef, liForProductRef, liForTechRef);

liForAnimalRef.append(h2AnimalRef, ulAnimalRef);
ulAnimalRef.append(
  liAnimalCatRef,
  liAnimalHamsterRef,
  liAnimalHorseRef,
  liAnimalParrotRef,
);

liForProductRef.append(h2ProductRef, ulProductRef);
ulProductRef.append(
  liProductBreadRef,
  liProductParsleyRef,
  liProductСottageСheeseRef,
);

liForTechRef.append(h2TechRef, ulTechRef);
ulTechRef.append(
  liTechHtmlRef,
  liTechCssRef,
  liTechJsRef,
  liTechReactRef,
  liTechNodeRef,
);

const jsMarkUp = document.querySelector('.js-markup');
jsMarkUp.appendChild(ulRef);
