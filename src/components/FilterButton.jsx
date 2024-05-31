import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const FilterButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown
      isOpen={dropdownOpen}
          toggle={toggle}
          className='mt-2'
      >
      <DropdownToggle
        caret
        color='secondary'
        outline>
        Filter by region
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Africa</DropdownItem>
        <DropdownItem>America</DropdownItem>
        <DropdownItem>Asia</DropdownItem>
        <DropdownItem>Europe</DropdownItem>
        <DropdownItem>Oceania</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default FilterButton;
