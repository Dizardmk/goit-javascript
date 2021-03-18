import './css/styles.css';
import api from './js/api/apiService';
import refs from './js/refs';
import galleryTemplate from './templates/gallery.hbs';
import debounce from 'lodash.debounce';
import pNotify from './js/pNotify';

refs.button.setAttribute('hidden', ''); // скрываем кнопку load more
refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.searchForm.addEventListener('click', onButtonClick);

function onSearch(event) {
  if (event.target.value === '') {
    return;
  }
  if (event.target.value === ' ') {
    return pNotify.emptyResult();
  }
  api.fetchImages(event.target.value).then(searchImageResult);
}

function searchImageResult(result) {
  if (result.hits.length === 0) {
    return pNotify.failureResult();
  }
  refs.button.setAttribute('hidden', ''); // скрываем кнопку load more
  if (refs.button.hidden && result.total > 12) {
    refs.button.removeAttribute('hidden');
    // если кнопка скрыта и результатов больше 12, то показываем ее
  }
  clearGallery();
  refs.gallery.innerHTML = galleryTemplate(result.hits);
  console.log(result);
}

function onButtonClick(event) {
  if (event.target.nodeName === 'BUTTON') {
    console.log('YAY');
  }
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
