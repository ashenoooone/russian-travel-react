import React from 'react';
import './Header.css';
import logo from '../../images/__logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='' className='logo' />
      <h1 className='title'>Путешествия</h1>
    </header>
  );
};

export default Header;
