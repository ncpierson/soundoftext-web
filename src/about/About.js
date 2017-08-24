import React from 'react';
import './About.css';
import twitterLogo from './twitter-logo.svg';

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section__title">About</h2>
      <p className="section__text">
        Sound of Text creates MP3 audio files from text and allows you to download
        them or play them in the browser — using the
        {' '}<a href="https://en.wikipedia.org/wiki/Speech_synthesis">text to speech</a>{' '}
        engine from
        {' '}<a href={"http://translate.google.com"}>Google Translate</a>.
      </p>
      <p className="section__text">
        Originally, Sound of Text was just for myself so that I could attach
        sound to my flashcards in
        {' '}<a href="http://apps.ankiweb.net">Anki</a>.
        Now, thousands of people use this site for many different purposes.
      </p>
      <div className="highlight">
        <div className="highlight__content">
          <span>
            Share your thoughts, appreciation, or feedback with me on Twitter:
          </span>
          <div className="link">
            <img className="link__img" src={twitterLogo} alt="twitter logo" />
            <a className="link__text" href="http://twitter.com/NickOnTheWeb">@NickOnTheWeb</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
