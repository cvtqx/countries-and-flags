export default function findCountryById(countries, countryId) {
    return countries.find((country) => country.alpha3Code === countryId);
}