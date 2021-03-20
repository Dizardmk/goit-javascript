import apiSettings from './apiSettings';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    try {
      const response = await fetch(
        `${apiSettings.BASE_URL}?key=${apiSettings.API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${this.page}`,
      );
      const result = response.json();
      this.incrementPage();
      return result;
    } catch {
      return pNotify.errorResult();
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
