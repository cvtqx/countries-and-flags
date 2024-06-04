export default function findCountryById(countries, countryId) {
    return countries.find(country => country.cca3 === countryId)
}