import React from 'react';
import { Button, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import countriesData from '../../data.json';

const BorderCountriesButtons = ({ borders }) => {
  const navigate = useNavigate();

  const borderCountries = borders.map((borderCountryCode) =>
    countriesData.find((country) => country.alpha3Code === borderCountryCode)
  );
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
            key={`btn-${borderCountry?.alpha3Code}`}
            onClick={() => navigate(`/country/${borderCountry?.alpha3Code}`)}
          style={{marginBottom: '1rem'}}>
            {borderCountry?.name}
          </Button>
        ))}
      </Col>
    </>
  );
};

export default BorderCountriesButtons;
