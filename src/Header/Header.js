import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header(props) {
  return (
    <header>
      <Link to="/">
        <h1 className="brand">Sound of Text</h1>
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/#about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#contribute" className="nav__link">
              Contribute
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#learn" className="nav__link">
              Learn
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
