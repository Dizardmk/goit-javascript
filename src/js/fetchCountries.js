import apiSetting from './apiSettings';

export default {
  async fetchCountries(searchQuery) {
    const url = `${apiSetting.BASE_URL}/rest/v2/name/${searchQuery}`;
    const response = await fetch(url);
    return await response.json();
  },
};

// return fetch(`${apiSetting.BASE_URL}/rest/v2/name/${searchQuery}`).then(response =>
//   response.json(),
// );
