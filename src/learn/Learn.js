import React from 'react';

function Learn(props) {
  return (
    <section id="learn" className="">
      <div className="section section--bordered">
        <h2 className="section__title">Learning Resources</h2>
        <p>There are many online resources to help you learn a new language.</p>
        <p>If you would like to add to this list, please send me an email.</p>
      </div>
      <div className="section section--colored">
        <div className="grid">
          <div className="card grid__item">
            <div className="card__content">
              <h3 className="card__title">Duolingo</h3>
              <p>
                Duolingo provides guided courses and gamification for learners at
                any level and supports many popular languages.
              </p>
            </div>
            <div className="card__actions">
              <a className="card__action" href="https://duolingo.com">Learn More</a>
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
              <a className="card__action" href="https://memrise.com">Learn More</a>
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
              <a className="card__action" href="https://apps.ankiweb.net">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
