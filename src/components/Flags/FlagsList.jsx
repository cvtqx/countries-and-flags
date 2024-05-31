import React from 'react'
import Flag from './FlagCard'
import { Row, Col } from 'reactstrap';

const FlagsList = () => {
  return (
    <Row className='m-5'>
      <Col
        sm='12'
        md='6'
        lg='3'>
        <Flag />
      </Col>
      <Col
        sm='12'
        md='6'
        lg='3'>
        <Flag />
      </Col>
      <Col
        sm='12'
        md='6'
        lg='3'>
        <Flag />
      </Col>
      <Col
        sm='12'
        md='6'
        lg='3'>
        <Flag />
      </Col>
      <Col
        sm='12'
        md='6'
        lg='3'>
        <Flag />
      </Col>
    </Row>
  );
}

export default FlagsList