import menuItemTemplate from '../templates/menu-item-template.hbs';
import menuItems from '../json/menu.json';

document
  .querySelector('.js-menu')
  .insertAdjacentHTML('beforeend', menuItemTemplate(menuItems));
