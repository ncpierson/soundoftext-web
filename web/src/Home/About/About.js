import React from 'react';
import { OutboundLink } from 'react-ga';

import './About.css';
import iconTwitter from '../Social/icon-twitter.svg';
import iconEmail from './icon-email.svg';
import iconPatreon from './icon-patreon.svg';

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section__title">About</h2>
      <p className="section__text">
        Sound of Text creates MP3 audio files from text and allows you to
        download them or play them in the browser — using the{' '}
        <a href="https://en.wikipedia.org/wiki/Speech_synthesis">
          text to speech
        </a>{' '}
        engine from <a href={'http://translate.google.com'}>Google Translate</a>
        .
      </p>
      <p className="section__text">
        Originally, Sound of Text was just for myself so that I could attach
        sound to my flashcards in <a href="http://apps.ankiweb.net">Anki</a>.
        Now, thousands of people use this site for many different purposes.
      </p>
      <h3 className="section__subtitle">Contact Info</h3>
      <p className="section__text">
        Feel free to contact me anytime — about anything.
      </p>
      <ul className="contact-details">
        <li className="contact-detail">
          <img src={iconTwitter} alt="twitter" />
          <OutboundLink
            to="https://twitter.com/SoundOfTextApp"
            eventLabel="twitter"
          >
            @SoundOfTextApp
          </OutboundLink>
        </li>
        <li className="contact-detail">
          <img src={iconEmail} alt="email" />
          <a href="mailto:contact@soundoftext.com">contact@soundoftext.com</a>
        </li>
        <li className="contact-detail">
          <img src={iconPatreon} alt="email" className="icon-patreon" />
          <OutboundLink
            to="https://patreon.com/nickpierson"
            eventLabel="patreon"
          >
            Nick Pierson
          </OutboundLink>
        </li>
      </ul>
    </section>
  );
};

export default About;
