import React from 'react';

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
    </section>
  );
}

export default About;
