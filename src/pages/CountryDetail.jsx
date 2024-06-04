import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { FaArrowLeftLong } from 'react-icons/fa6';
import BorderCountriesButtons from '../components/UI/BorderCountriesButtons';

const CountryDetail = ({ countries, setIsClicked }) => {
  const { countryId } = useParams();
  let navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const country = countries.find((country) => country.cca3 === countryId);
  console.log(country);

  // const nativeName = country?.name?.nativeName
  // console.log(nativeName)
  const currencies = Object.keys(country?.currencies).join(', ');
  const languages = Object.values(country?.languages).join(', ');
  const borderCountries = country?.borders;
  console.log(borderCountries);

  return (
    <>
      <Row className='m-2'>
        <Button
          onClick={handleBackButtonClick}
          className='button-back'>
          {' '}
          <FaArrowLeftLong />
          {'  '}
          Back
        </Button>
      </Row>
      <Row className='m-2'>
        <Col
          sm='12'
          lg='5'>
          <img
            className='countryDetail-img'
            alt={`Flag of ${country?.name?.common}`}
            src={country?.flags?.svg}
            width='100%'></img>
        </Col>
        <Col
          sm='12'
          lg='7'>
          <Row className='mt-2'>
            <h1 style={{ fontWeight: 'bold' }}>{country?.name?.common}</h1>
          </Row>
          <Row
            className='mt-2'
            style={{ lineHeight: '1' }}>
            <Col
              sm='12'
              md='6'>
              <p>
                <span style={{ fontWeight: 'bold' }}>Native Name:</span>{' '}
                {''}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Population:</span>{' '}
                {country?.population}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Region:</span>{' '}
                {country?.region}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Sub Region:</span>{' '}
                {country?.subregion}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Capital:</span>{' '}
                {country?.capital}
              </p>
            </Col>
            <Col
              sm='12'
              md='6'>
              <p>
                <span style={{ fontWeight: 'bold' }}>Top Level Domain:</span>{' '}
                {country?.tld}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Currencies:</span>{' '}
                {currencies}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Languages:</span>{' '}
                {languages}
              </p>
            </Col>
          </Row>
          {borderCountries && borderCountries.length > 0 ? (
            <Row className='mt-2'>
              <BorderCountriesButtons borders={borderCountries} countries={countries} />
            </Row>
          ) : null}
        </Col>
      </Row>
    </>
  );
};

export default CountryDetail;
