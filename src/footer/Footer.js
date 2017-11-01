import React from 'react';
import './Footer.css';
import iconTwitter from './icon-twitter.svg';
import iconEmail from './icon-email.svg';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__left">
        <a className="footer__link" href="http://twitter.com/NickOnTheWeb">
          <img className="icon" src={iconTwitter} alt="twitter logo" />
        </a>
        <a className="footer__link" href="mailto:nick@nickpierson.me">
          <img className="icon" src={iconEmail} alt="email icon" />
        </a>
      </div>
      <div className="footer__right">
        <span>Made by</span> <a href="http://nickpierson.me">Nick Pierson</a>
      </div>
    </footer>
  );
}

export default Footer;
