import apiSetting from './apiSettings';

export default {
  async fetchCountries(searchQuery) {
    const response = await fetch(`${apiSetting.BASE_URL}/${searchQuery}`);
    return await response.json();
  },
};
