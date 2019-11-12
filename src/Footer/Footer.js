import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__left">
        <a className="footer__link" href="https://twitter.com/SoundOfTextApp">
          Twitter
        </a>
        <a
          className="footer__link"
          href="https://github.com/ncpierson/soundoftext-web"
        >
          GitHub
        </a>
        <a className="footer__link" href="mailto:contact@soundoftext.com">
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
