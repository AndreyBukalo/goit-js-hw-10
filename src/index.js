import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import { renderHTML, cleanMarkup } from './js/renderHTML.js';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export const countryList = document.querySelector('.country-list');
export const countryInfo = document.querySelector('.country-info');
const form = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;



form.addEventListener('input', debounce(inputEntry, DEBOUNCE_DELAY));

function inputEntry(event) {
  const formInput = event.target.value.trim();
  if (!formInput) {
    cleanMarkup(countryInfo);
    cleanMarkup(countryList);
    return;
  }
  fetchCountries(formInput)
    .then(country => {
      console.log(country);
      if (country.length > 10) {
        cleanMarkup(countryInfo);
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      renderHTML(country);
    })
    .catch(error => {
      cleanMarkup(countryInfo);
      cleanMarkup(countryList);
      Notify.failure('Oops, there is no country with that name');
    });;
}

