import React from 'react';

function Learn(props) {
  return (
    <section id="learn">
      <h2 className="title">Learning Resources</h2>
      <p>There are many online resources to help you learn a new language.</p>
      <p>If you would like to add to this list, please send me an email.</p>
      <div className="resources">
        <div className="resource">
          <h3><a href="#">Duolingo</a></h3>
          <p>
            Duolingo provides guided courses and gamification for learners at
            any level and supports many popular languages.
          </p>
        </div>
        <div className="resource">
          <h3><a href="#">Memrise</a></h3>
          <p>
            Memrise focuses on learning vocabulary with using flashcard-like
            decks created by a large community of members. There are courses
            for over 200 languages.
          </p>
        </div>
        <div className="resource">
          <h3><a href="#">Anki</a></h3>
          <p>
            Anki allows you to create your own flashcard decks and study how
            and when you want on any device.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Learn;
