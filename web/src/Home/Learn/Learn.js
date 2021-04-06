import React from 'react';
import { OutboundLink } from 'react-ga';

const resources = [
  {
    description:
      'Anki allows you to create your own flashcard decks and study how and when you want on any device.',
    label: 'anki',
    title: 'Anki',
    url: 'https://apps.ankiweb.net'
  },
  {
    description:
      'Duolingo provides guided courses and gamification for learners at any level and supports many popular languages.',
    label: 'duolingo',
    title: 'Duolingo',
    url: 'https://duolingo.com'
  },
  {
    description:
      'Memrise focuses on learning vocabulary with using flashcard-like decks created by a large community of members. There are courses for over 200 languages.',
    label: 'memrise',
    title: 'Memrise',
    url: 'https://memrise.com'
  },
  {
    description:
      'Speaking Lab is a free language learning website with free workbooks, resources, and courses on a variety of topics across several languages.',
    label: 'speakinglab',
    title: 'Speaking Lab',
    url: 'https://www.speakinglab.xyz/'
  }
];

function Learn(props) {
  const $cards = resources.map(resource => (
    <Card key={resource.label} {...resource} />
  ));

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
        <div className="grid">{$cards}</div>
      </div>
    </section>
  );
}

const Card = ({ description, label, title, url }) => (
  <div className="card grid__item">
    <div className="card__content">
      <h3 className="card__title">{title}</h3>
      <p>{description}</p>
    </div>
    <div className="card__actions">
      <OutboundLink className="card__action" eventLabel={label} to={url}>
        Learn More
      </OutboundLink>
    </div>
  </div>
);

export default Learn;
