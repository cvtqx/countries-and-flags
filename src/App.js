import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilterButton from './components/FilterButton';
import SearchInput from './components/SearchInput';
import FlagsList from './components/Flags/FlagsList';

import Header from './components/Header';
import { Col, Row, Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');

  const fetchAllCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries', error);
    }
  };

  const searchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const result = response.data.filter((country) =>
        country.name.common.toLowerCase().startsWith(input)
      );
      setCountries(result);
    } catch (error) {
      console.error('Countries could not be found', error);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  useEffect(() => {
    searchCountries();
  }, [input]);

  return (
    <>
      <Header />
      <Container>
        <Row className='m-5'>
          <Col
            sm='12'
            md='6'>
            <SearchInput
              input={input}
              setInput={setInput}
            />
          </Col>
          <Col
            sm='12'
            md='6'>
            <FilterButton />
          </Col>
        </Row>

        <FlagsList countries={countries} />
      </Container>
    </>
  );
}

export default App;
