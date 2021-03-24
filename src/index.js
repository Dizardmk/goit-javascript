import './css/styles.css';
import ApiService from './js/api/apiService';
import refs from './js/refs';
import galleryTemplate from './templates/gallery.hbs';
import debounce from 'lodash.debounce';
import pNotify from './js/pNotify';

const apiService = new ApiService();
refs.loadMoreBtn.setAttribute('hidden', ''); // скрываем кнопку loadMoreBtn
refs.searchForm.addEventListener('submit', event => event.preventDefault());
refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.searchForm.addEventListener('click', onLoadMore);

async function onSearch(event) {
  if (event.target.value === '') {
    return;
  }
  if (event.target.value === ' ') {
    return pNotify.emptyResult();
  }
  refs.loadMoreBtn.setAttribute('hidden', '');
  clearGallery(); // чистим галерею от прошлых результатов
  apiService.query = event.target.value;
  apiService.resetPage();
  const response = await apiService.fetchImages();
  return searchImagesResult(response);
}

async function onLoadMore(event) {
  if (event.target.nodeName === 'BUTTON') {
    const response = await apiService.fetchImages();
    scrollToNewElements();
    return createGallery(response);
  }
}

function searchImagesResult(result) {
  if (result.hits.length === 0) {
    return pNotify.failureResult();
    // если ничего не пришло, выводим нотификашку
  }
  createGallery(result); // рисуем галерею если все ок
  if (refs.loadMoreBtn.hidden && result.total > 12) {
    refs.loadMoreBtn.removeAttribute('hidden');
    // если результатов пришло больше 12 и кнопки нет, то показываем loadMoreBtn
  }
}

function createGallery(img) {
  refs.gallery.insertAdjacentHTML('beforeend', galleryTemplate(img.hits));
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

function scrollToNewElements() {
  const totalScrollHeight = refs.gallery.clientHeight;
  setTimeout(() => {
    window.scrollTo({
      top: totalScrollHeight,
      behavior: 'smooth',
    });
  }, 500);
}
