
export function fetchCountries(name) {
  const MAIN_LINK = 'https://restcountries.com/v3.1/';
  const FILTER = 'name,capital,population,flags,languages';

    return fetch(`${MAIN_LINK}/name/${name}?fields=${FILTER}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
