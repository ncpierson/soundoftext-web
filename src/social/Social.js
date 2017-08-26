import React from 'react';
import './Social.css';
import iconTwitter from '../footer/icon-twitter.svg';

const Social = () => {
  return (
    <section className="section section--colored" id="about">
      <div className="grid grid--center">
        <div className="card grid__item grid__item--solo">
          <span>Share your thoughts, appreciation, or feedback with me on Twitter:</span>
          <div className="twitter">
            <img className="twitter__logo" src={iconTwitter} alt="twitter logo" />
            <a className="twitter__username" href="http://twitter.com/NickOnTheWeb">@NickOnTheWeb</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
