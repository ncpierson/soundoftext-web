import React from 'react';
import DonateForm from './DonateForm';
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
      <div className="goals">
        <div className="goal">
          <div className="goal__progress">
            <div className="progress-bar">
              [#####]
            </div>
          </div>
          <h4 className="goal__title">Hosting - $5</h4>
          <p className="goal__description">
            This is roughly the cost of hosting the website every month. If
            this goal isn't met, I am losing money to keep the site going.
          </p>
        </div>
        <div className="goal">
          <div className="goal__progress">
            <div className="progress-bar">
              [##---]
            </div>
          </div>
          <h4 className="goal__title">Maintenance - $20</h4>
          <p className="goal__description">
            In addition to the cost of hosting, I spend time working on this
            pretty much every month for some reason or another.
          </p>
        </div>
        <div className="goal">
          <div className="goal__progress">
            <div className="progress-bar">
              [-----]
            </div>
          </div>
          <h4 className="goal__title">New Features - $100</h4>
          <p className="goal__description">
            Adding new features can take me several hours. If this goal is
            met, I promise a new feature will be added. Progress toward this
            goal is only reset once full.
          </p>
        </div>
      </div>
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
