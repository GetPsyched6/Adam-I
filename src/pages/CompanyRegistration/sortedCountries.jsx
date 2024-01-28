import { countries } from 'countries-list';

const countryOptions = Object.values(countries).map(country => ({
  label: country.name,
  value: country.name,
}));

countryOptions.sort((a, b) => a.label.localeCompare(b.label));

export default countryOptions;
