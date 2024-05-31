import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { Input } from 'reactstrap';
import './SearchInput.css';

const SearchInput = ({ input, setInput }) => {
  const handleSearchInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='mt-2 searchInput-container'>
      <div className='searchInput-icon'>
        <IoSearchSharp />
      </div>
      <Input
        placeholder='Search for a country...'
        className='searchInput-content'
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default SearchInput;
