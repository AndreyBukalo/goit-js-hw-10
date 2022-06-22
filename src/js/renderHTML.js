import { countryList, countryInfo } from '../index.js';
export const renderHTML = country => {
  if (country.length === 1) {
    cleanMarkup(countryList);
    countryInfo.innerHTML = renderCountryInfo(country);
  } else {
    cleanMarkup(countryInfo);
    countryList.innerHTML = renderCountryList(country);
  }
};

export const renderCountryList = country => {
  return country
    .map(
      ({ name, official, flags }) =>
        `<img src="${flags.svg}" alt=${name} width = 120px class=flags />
            <li><b>${name.official}</b></li>`
    )
    .join('');
};

export const renderCountryInfo = country => {
  return country
    .map(
      ({ name, flags, capital, population, languages }) =>
        `<img src="${flags.svg}" alt=${name} width = 120px class=flags />
            <h2>${name.official}</h2>
          <p><b>Capital:</b> ${capital}</p>
          <p><b>Population:</b> ${population}</p>
          <p><b>Language:</b> ${Object.values(languages)}</p>`
    )
    .join('');
};

export const cleanMarkup = ref => (ref.innerHTML = '');
