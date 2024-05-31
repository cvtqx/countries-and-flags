import React, { useEffect, useState } from 'react';
import FlagCard from './FlagCard';
import { Row, Col } from 'reactstrap';

const FlagsList = ({countries}) => {
  
  return (
    <Row className='m-5'>
      {countries.map((country, index) => (
        <Col
          key={country.cca3}
          sm='12'
          md='6'
          lg='3'>
          <FlagCard country={country} />
        </Col>
      ))}
    </Row>
  );
};

export default FlagsList;
