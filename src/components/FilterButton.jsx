import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const FilterButton = ({region, setRegion}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSelect = (selectedRegion) => {
    setRegion(selectedRegion);
    console.log(region)
  };

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      className='mt-2'>
      <DropdownToggle
        caret
        color='secondary'
        outline>
        {region ? region : 'Select region'}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleSelect('Africa')}>
          Africa
        </DropdownItem>
        <DropdownItem onClick={() => handleSelect('Americas')}>
          Americas
        </DropdownItem>
        <DropdownItem onClick={() => handleSelect('Asia')}>Asia</DropdownItem>
        <DropdownItem onClick={() => handleSelect('Europe')}>
          Europe
        </DropdownItem>
        <DropdownItem onClick={() => handleSelect('Oceania')}>
          Oceania
        </DropdownItem>
        <DropdownItem onClick={() => handleSelect(null)}>
          All
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default FilterButton;
