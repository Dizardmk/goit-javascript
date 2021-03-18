import './css/styles.css';
import api from './js/api/apiService';
import refs from './js/refs';
import galleryTemplate from './templates/gallery.hbs';
import debounce from 'lodash.debounce';
import pNotify from './js/pNotify';

refs.button.setAttribute('hidden', '');
refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  event.preventDefault();
  if (event.target.value === '') {
    return;
  }
  if (event.target.value === ' ') {
    return pNotify.emptyResult();
  }
  api.fetchImages(event.target.value).then(searchImageResult);
}

function searchImageResult(result) {
  clearGallery();
  if (refs.button.hidden) {
    refs.button.removeAttribute('hidden');
  }
  if (result.hits.length === 0) {
    return pNotify.failureResult();
  }
  refs.gallery.innerHTML = galleryTemplate(result.hits);
  console.log(result);
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
