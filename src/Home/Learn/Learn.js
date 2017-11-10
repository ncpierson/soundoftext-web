import React from 'react';
import { OutboundLink } from 'react-ga';

function Learn(props) {
  return (
    <section id="learn" className="">
      <div className="section section--bordered">
        <h2 className="section__title">Learning Resources</h2>
        <p className="section__text">
          There are many online resources to help you learn a new language.
          These are a select few that I personally think are the most useful.
        </p>
        <p className="section__text">
          <strong>If you would like to submit a site</strong>, or advertise your
          own, please send me an email at{' '}
          <a href="mailto:contact@soundoftext.com">contact@soundoftext.com</a>.
        </p>
      </div>
      <div className="section section--colored">
        <div className="grid">
          <div className="card grid__item">
            <div className="card__content">
              <h3 className="card__title">Duolingo</h3>
              <p>
                Duolingo provides guided courses and gamification for learners
                at any level and supports many popular languages.
              </p>
            </div>
            <div className="card__actions">
              <OutboundLink
                className="card__action"
                eventLabel="duolingo"
                to="https://duolingo.com"
              >
                Learn More
              </OutboundLink>
            </div>
          </div>
          <div className="card grid__item">
            <div className="card__content">
              <h3 className="card__title">Memrise</h3>
              <p>
                Memrise focuses on learning vocabulary with using flashcard-like
                decks created by a large community of members. There are courses
                for over 200 languages.
              </p>
            </div>
            <div className="card__actions">
              <OutboundLink
                className="card__action"
                eventLabel="memrise"
                to="https://memrise.com"
              >
                Learn More
              </OutboundLink>
            </div>
          </div>
          <div className="card grid__item">
            <div className="card__content">
              <h3 className="card__title">Anki</h3>
              <p>
                Anki allows you to create your own flashcard decks and study how
                and when you want on any device.
              </p>
            </div>
            <div className="card__actions">
              <OutboundLink
                className="card__action"
                eventLabel="anki"
                to="https://apps.ankiweb.net"
              >
                Learn More
              </OutboundLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
