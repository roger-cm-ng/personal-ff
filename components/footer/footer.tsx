import React from 'react';
import css from './footer.scss';

const Footer = () => (
  <footer className={css.footer}>
    <h5>
      Coding problem
      {' - '}
      <a
        href='https://www.geektrust.in/finding-falcone'
      >
        www.geektrust.in/finding-falcone
      </a>
    </h5>
  </footer>
);

export default Footer;
