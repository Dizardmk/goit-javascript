import './css/styles.css';
import API from './js/fetchCountries';
import refs from './js/refs';
import countriesTemplate from './templates/countries.hbs';
import countryInfoTemplate from './templates/countryInfo.hbs';
import debounce from 'lodash.debounce';
import pNotify from './js/pNotify';

refs.input.addEventListener('input', debounce(onInput, 500));

async function onInput(event) {
  if (event.target.value === '') {
    return;
  }
  if (event.target.value === ' ') {
    return pNotify.emptyResult();
  }
  try {
    const countries = await API.fetchCountries(event.target.value);
    searchCountryResult(countries);
  } catch {
    return pNotify.errorResult();
  }
}

function searchCountryResult(result) {
  clearContent();
  if (result.status === 404) {
    pNotify.failureResult();
  }
  if (result.length > 10) {
    return pNotify.manyResults();
  }
  if (result.length >= 2 && result.length <= 10) {
    refs.content.innerHTML = countriesTemplate(result);
  }
  if (result.length === 1) {
    refs.content.innerHTML = countryInfoTemplate(result);
  }
}

function clearContent() {
  refs.content.innerHTML = '';
}
