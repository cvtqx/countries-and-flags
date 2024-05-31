import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const FlagCard = () => {
  return (
    <Card
      
      className='my-2'
      style={{
        width: '18rem',
        overflow:'hidden',
      }}>
      <img
        alt='Flag'
        src='https://picsum.photos/300/200'
        width='100%'
      />
      <CardBody>
        <CardTitle tag='h5'>Country Name</CardTitle>
        <CardText>
          <p>
            <span>Population:</span>
          </p>
          <p>
            <span>Region:</span>
          </p>
          <p>
            <span>Capital:</span>
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default FlagCard