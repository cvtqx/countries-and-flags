import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import BorderCountriesButtons from '../UI/BorderCountriesButtons';

const CountryDetail = ({countries}) => {
  const { countryId } = useParams();

  const country = countries.find(country => country.cca3 === countryId);
  console.log(country)
  
  // const nativeName = 
  // const currencies =
  // const languages = 
  //const borderCountries = 
  
  return (
    <Container>
      <Row>
        <Button> Back</Button>
      </Row>
      <Row>
        <Col
          sm='12'
          lg='5'>
          <img
            alt={`Flag of ${country?.name?.common}`}
            src={country?.flags?.svg}
            width='100%'></img>
        </Col>
        <Col
          sm='12'
          lg='7'>
          <Row>
            <h1 style={{fontWeight:'bold'}}>{country?.name?.common}</h1>
          </Row>
          <Row>
            <Col
              sm='12'
              md='6'>
              <p>
                <span style={{ fontWeight: 'bold' }}>Native Name:</span>{' '}
                {/* {country?.name?.nativeName.ron.common} */}
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
                <span style={{ fontWeight: 'bold' }}>Currencies:</span>
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Languages:</span>
              </p>
            </Col>
          </Row>
          <Row>
            <BorderCountriesButtons  />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CountryDetail;