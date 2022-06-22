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
      ({ name, flags }) =>
        `
            <li><img src="${flags.svg}" alt=${name} width = 45px class=flags />
            <p>${name.common}</p></li>`
    )
    .join('');
};

export const renderCountryInfo = country => {
  return country
    .map(
      ({ name, flags, capital, population, languages }) =>
        `<li><img src="${flags.svg}" alt=${name} width = 60px class=flags />
            <h2>${name.common}</h2></li>
          <p><b>Capital:</b> ${capital}</p>
          <p><b>Population:</b> ${population}</p>
          <p><b>Language:</b> ${Object.values(languages)}</p>`
    )
    .join('');
};

export const cleanMarkup = ref => (ref.innerHTML = '');
