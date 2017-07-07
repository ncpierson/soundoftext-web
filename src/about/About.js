import React from 'react';

function About(props) {
  return (
    <section id="about">
      <h2 className="title">About</h2>
      <p>
        Sound of Text was originally created to help
        <a href="http://twitter.com/NickOnTheWeb" target="_blank">myself</a>
        learn Spanish. I wanted a website that could generate sound files
        so that I could download and attach them to
        <a href="http://apps.ankiweb.net">Anki</a> flash cards.
      </p>
      <p>
        Now, it is seeing quite a few users every day and I think it is the
        best (free) website for downloading MP3 audio files from text.
        Currently, only audio from Google Translate is available, but there is
        potential for more voice providers in the future.
      </p>
      <p>
        <strong>Have a suggestion?</strong>
        I would love to hear it!
        <a href="http://twitter.com/NickOnTheWeb" target="_blank">Tweet at me</a>
        or send me an email at
        <a href="mailto:contact@soundoftext.com">contact@soundoftext.com</a>.
      </p>
      <p>
        <strong>Want to stay up to date with what I'm doing?</strong>
        Then, please
        <a href="http://twitter.com/NickOnTheWeb">follow me on Twitter</a>.
        I also have a
        <a href="http://nickpierson.me">website</a> with other projects.
      </p>
    </section>
  );
}

export default About;
