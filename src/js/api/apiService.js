import apiSettings from './apiSettings';

export default {
  async fetchImages(searchQuery) {
    const response = await fetch(
      `${apiSettings.BASE_URL}?key=${apiSettings.API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=1`,
    );
    return await response.json();
  },
};
