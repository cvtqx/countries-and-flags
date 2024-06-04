import 'bootstrap/dist/css/bootstrap.min.css';
import FilterButton from './components/UI/FilterButton';
import SearchInput from './components/UI/SearchInput';
import FlagsList from './components/Flags/FlagsList';

import Header from './components/UI/Header';
import { Col, Row, Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import countriesData from './data.json';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryDetail from './pages/CountryDetail';

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState(null);
  const [region, setRegion] = useState(null);
  const [theme, setTheme] = useState('light');
  const [isClicked, setIsClicked] = useState(false);

  const fetchAllCountries = async () => {
    setIsClicked(false) //WHY IS THIS NOT WORKING????
    try {
      setCountries(countriesData);
    } catch (error) {
      console.error('Error fetching countries', error);
    }
  };

  const searchCountries = async () => {
    try {
      if (region) {
        const result = countriesData.filter(
          (country) =>
            country.region === region &&
            country.name.toLowerCase().startsWith(input)
        );
        setCountries(result);
      } else {
        const result = countriesData.filter((country) =>
          country.name.toLowerCase().startsWith(input)
        );
        setCountries(result);
      }
    } catch (error) {
      console.error('Countries could not be found', error);
    }
  };

  const filterByRegion = async () => {
    try {
      if (input) {
        const result = countriesData.filter(
          (country) =>
            country.region === region &&
            country.name.toLowerCase().startsWith(input)
        );
        setCountries(result);
      } else {
        const result = countriesData.filter(
          (country) => country.region === region
        );
        setCountries(result);
      }
    } catch (error) {
      console.error('Countries could not be found', error);
    }
  };

  //get all countries on load
  useEffect(() => {
    fetchAllCountries();
  }, []);

  useEffect(() => {
    if (input) {
      searchCountries();
    } else if (region) {
      filterByRegion();
    } else {
      fetchAllCountries();
    }
  }, [input, region]);

  //toggle theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleClick = () => {
    console.log('handleClick');
    setIsClicked(true);
  };

  return (
    <>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Container>
        {!isClicked && (
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
              <FilterButton
                region={region}
                setRegion={setRegion}
              />
            </Col>
          </Row>
        )}

        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <FlagsList
                  countries={countries}
                  isClicked={isClicked}
                  handleClick={handleClick}
                />
              }></Route>
            <Route
              path='/country/:countryId'
              element={
                <CountryDetail
                  countries={countries}
                  setIsClicked={setIsClicked}
                />
              }></Route>
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
