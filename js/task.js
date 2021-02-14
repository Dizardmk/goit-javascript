import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightboxModal: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxButton: document.querySelector(
    'button[data-action="close-lightbox"]',
  ),
};

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
function createGalleryList(img) {
  const liRef = document.createElement('li');
  liRef.classList.add('gallery__item');
  liRef.insertAdjacentHTML(
    'beforeEnd',
    `<a class="gallery__link"
    href=${img.original}>
    <img
      class="gallery__image"
      src=${img.preview}
      data-source=${img.original}
      alt="${img.description}"/>
  </a>`,
  );
  return liRef;
}
refs.gallery.append(...galleryItems.map(createGalleryList));
// -----------------------------------------------------------------------

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
refs.gallery.addEventListener('click', OnGalleryItemClick);

function OnGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  largeImageUrl();
  openModal();
}
// -----------------------------------------------------------------------

// Открытие модального окна по клику на элементе галереи.
function openModal() {
  refs.lightboxModal.classList.add('is-open');
}
// -----------------------------------------------------------------------

// Подмена значения атрибута src элемента img.lightbox__image.
function largeImageUrl() {
  refs.lightboxImage.src = event.target.dataset.source;
}
// -----------------------------------------------------------------------

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
refs.lightboxButton.addEventListener('click', onLightboxButtonClick);

function onLightboxButtonClick() {
  refs.lightboxModal.classList.remove('is-open');
  clearLargeImageUrl();
}
// -----------------------------------------------------------------------

// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
function clearLargeImageUrl() {
  refs.lightboxImage.src = '';
}
// -----------------------------------------------------------------------
