import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header>
      <h1 className="brand">Sound of Text</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#learn">Learn</a></li>
          <li><a href="#contribute">Contribute</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
