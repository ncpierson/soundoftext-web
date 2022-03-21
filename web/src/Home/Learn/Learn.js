import React from 'react';
import { OutboundLink } from 'react-ga';

const resources = [
  {
    description:
      'Hearling is an improved version of Sound of Text, with high-quality voices, created by the same developer.',
    label: 'hearling',
    title: 'Hearling',
    url: 'https://hearling.com',
  },
  {
    description:
      'Anki allows you to create your own flashcard decks and study how and when you want on any device.',
    label: 'anki',
    title: 'Anki',
    url: 'https://apps.ankiweb.net',
  },
];

function Learn(props) {
  const $cards = resources.map((resource) => (
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
