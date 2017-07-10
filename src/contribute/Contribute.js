import React from 'react';
import DonateForm from './DonateForm';
import Goals from './Goals';
import './Contribute.css';

function Contribute(props) {
  return (
    <section id="contribute">
      <h2 className="title">Contribute</h2>
      <p>There are many ways to contribute to making Sound of Text better.</p>
      <h3>Donate</h3>
      <p>
        Hosting Sound of Text is not very expensive, but I do and have spent
        a lot of time building, maintaining, and adding new features.
        Donating helps pay for the time I have already put into Sound of Text
        and will help pay for new features I really want to add.
      </p>
      <DonateForm />
      <h4>Donation Goals</h4>
      <p>
        I have also set up some donation goals to make donations and their
        outcomes more transparent.
      </p>
      <Goals />
      <h3>Vote</h3>
      <p>Want a new feature added? Vote on what you would like.</p>
      <p>
        I have created a Google Form to get user feedback.
        <a href="https://goo.gl/forms/KALL6dBXzFoHSqin2">Visit this link</a>
        to cast your vote.
      </p>
      <h3>Translate this Site</h3>
      <p>
        If you are seeing this text in English, but your computer or browser
        is set to use a different language, then this site does not have a
        translation for that language. If you are interested in translating
        this site &mdash; or if you have noticed a translation mistake &mdash;
        please send me an email at
        <a href="mailto:contact@soundoftext.com">contact@soundoftext.com</a>.
      </p>
    </section>
  );
}

export default Contribute;
