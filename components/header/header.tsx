import React from 'react';
import css from './header.scss';

const Header = () => (
  <header
    className={css.header}
  >
    <h1>Finding Falcone!</h1>
    <div
      className={css.links}
    >
      <a href='#BASE_URL#'>Reset</a>
      {' | '}
      <a href='https://www.geektrust.in/'>Geek Trust Home</a>
    </div>
  </header>
);

export default Header;
