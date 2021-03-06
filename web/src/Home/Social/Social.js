import React from 'react';
import { OutboundLink } from 'react-ga';

import './Social.css';
import iconTwitter from './icon-twitter.svg';

const Social = () => {
  return (
    <section className="section section--colored" id="about">
      <div className="grid">
        <div className="card grid__item grid__item--thin">
          <span>
            Share your thoughts, appreciation, or feedback with me on Twitter:
          </span>
          <div className="twitter">
            <img
              className="twitter__logo"
              src={iconTwitter}
              alt="twitter logo"
            />
            <OutboundLink
              eventLabel="twitter"
              to="https://twitter.com/SoundOfTextApp"
              className="twitter__username"
            >
              @SoundOfTextApp
            </OutboundLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
