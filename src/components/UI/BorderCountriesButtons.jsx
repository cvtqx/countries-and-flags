import React from 'react';
import { Button, Col } from 'reactstrap';

const BorderCountriesButtons = () => {
  const borders = ['France', 'Germany', 'Netherlands'];
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
        {borders.map((border) => (
          <Button>{border}</Button>
        ))}
      </Col>
    </>
  );
};

export default BorderCountriesButtons;
