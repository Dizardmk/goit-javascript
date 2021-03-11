import apiSetting from './apiSettings';

export default {
  fetchCountries(searchQuery) {
    return fetch(`${apiSetting.BASE_URL}/${searchQuery}`).then(response =>
      response.json(),
    );
  },
};
