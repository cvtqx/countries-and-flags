import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const FlagCard = ({country}) => {
  return (
    <Card
      className='my-2'
      style={{
        width: '100%',
        maxWidth: '296px',
        height: '337px',
        overflow: 'hidden',
      }}>
      <img
        alt={`Flag of ${country.name.common}`}
        src={country.flags.svg}
        width='100%'
        height='145px'
      />
      <CardBody>
        <CardTitle
          tag='h5'
          style={{ fontWeight: 'bold' }}>
          {country.name.common}
        </CardTitle>
        <CardText>
          <span style={{ fontWeight: 'bold' }}>Population:</span>{' '}
          {country.population} people.
        </CardText>
        <CardText>
          <span style={{ fontWeight: 'bold' }}>Region:</span> {country.region}
        </CardText>
        <CardText>
          <span style={{ fontWeight: 'bold' }}>Capital:</span> {country.capital}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default FlagCard;
