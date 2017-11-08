import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Footer.css';
import iconTwitter from './icon-twitter.svg';
import iconEmail from './icon-email.svg';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__left">
        <a className="footer__link" href="http://twitter.com/NickOnTheWeb">
          Twitter
        </a>
        <a className="footer__link" href="mailto:nick@nickpierson.me">
          Email
        </a>
      </div>
      <div className="footer__right">
        <Link className="footer__link" to="/docs#index">
          API
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
