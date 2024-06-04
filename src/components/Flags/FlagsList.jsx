import React from 'react';
import FlagCard from './FlagCard';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const FlagsList = ({ countries,  handleClick }) => {
  return (
    <Row className='m-5'>
      {countries.map((country, index) => (
        <Col
          key={country.alpha3Code}
          sm='12'
          md='6'
          lg='3'>
          <Link
            to={`/country/${country.alpha3Code}`}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <FlagCard
              country={country}
              onClick={handleClick}
            />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default FlagsList;
