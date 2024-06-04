import React from 'react';
import { Button, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const BorderCountriesButtons = ({ borders, countries }) => {
    const navigate = useNavigate();
    const borderCountries = borders.map(borderCountryCode => countries.find(country => country.cca3 === borderCountryCode))
    console.log(borderCountries)
  return (
    <>
      <Col
        sm='12'
        lg='4'>
        <span style={{ fontWeight: 'bold' }}>Border Countries:</span>
      </Col>

      <Col
        sm='12'
        lg='8'>
        {borderCountries.map((borderCountry) => (
          <Button
            className='borderCountries-button'
            key={`btn-${borderCountry.cca3}`}
            onClick={()=>navigate(`/country/${borderCountry.cca3}`)}>
            {borderCountry.name.common}
          </Button>
        ))}
      </Col>
    </>
  );
};

export default BorderCountriesButtons;
