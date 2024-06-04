import React from 'react';

import { Navbar, NavbarText } from 'reactstrap';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

const Header = ({ theme, toggleTheme }) => {
  return (
    <div>
      <Navbar
        color={theme === 'light' ? 'light' : 'dark'}
        light
        expand='md'
        className='shadow-sm p-3 mb-5'
        width='100%'>
        <NavbarText className='fw-bold fs-4'>
          <a href='/' style={{textDecoration: 'none', color:'inherit'}}>Where in the world?</a>
        </NavbarText>
        <NavbarText
          className='fw-bold'
          onClick={toggleTheme}>
          {theme === 'light' ? (
            <div>
              <MdOutlineDarkMode /> <span>Dark Mode</span>
            </div>
          ) : (
            <div>
              <MdOutlineLightMode /> <span>Light Mode</span>
            </div>
          )}
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default Header