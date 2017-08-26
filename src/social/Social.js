import React from 'react';
import './Social.css';
import twitterLogo from './twitter-logo.svg';

const Social = () => {
  return (
    <section className="section section--colored" id="about">
      <div className="card">
        <span>
          Share your thoughts, appreciation, or feedback with me on Twitter:
        </span>
        <div className="twitter">
          <img className="twitter__logo" src={twitterLogo} alt="twitter logo" />
          <a className="twitter__username" href="http://twitter.com/NickOnTheWeb">@NickOnTheWeb</a>
        </div>
      </div>
    </section>
  );
}

export default Social;
