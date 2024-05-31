import './App.css';
import FilterButton from './components/FilterButton';
import SearchInput from './components/SearchInput';
import FlagsList from './components/Flags/FlagsList';

import Header from './components/Header';
import { Container, Col, Row } from 'reactstrap';

function App() {
  return (
    <>
      <Header />
      <Row className='m-5'>
        <Col
          sm='12'
          md='6'>
          <SearchInput />
        </Col>
        <Col
          sm='12'
          md='6'>
          <FilterButton />
        </Col>
      </Row>

      <FlagsList />
    </>
  );
}

export default App;
