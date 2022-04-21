import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='links'>
        <li className='link'>
          <a href='#'>Карты</a>
        </li>
        <li className='link'>
          <a href='#'>Погода</a>
        </li>
        <li className='link'>
          <a href='#'>Расписание</a>
        </li>
        <li className='link'>
          <a href='#'>Календарь</a>
        </li>
        <li className='link'>
          <a href='#'>Путешествия</a>
        </li>
      </ul>
      <p className='copyright'>{`${new Date().getFullYear()} Роман Гонтарь`}</p>
    </footer>
  );
};

export default Footer;
