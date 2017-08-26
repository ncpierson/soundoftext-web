import React from 'react';
import DonateForm from './DonateForm';
import './Contribute.css';

function Contribute(props) {
  return (
    <section id="contribute" className="section">
      <h2 className="section__title">Contribute</h2>
      <p className="section__text">
        This website doesn't run for free. I appreciate anything you do to help!
        You can support me on Patreon, donate directly, or help translate the site.
      </p>
      <h3 className="section__subtitle">Patreon</h3>
      <p className="section__text">
        I recently started a Patreon and I'm hoping for this to be the best way
        for me to get feedback from my users and to receive donations.
        I will try to host regular polls and engage with the community to see
        what you want — as well as rewarding users who decide to donate.
      </p>
      <div className="section section--centered section--colored section--embedded">
        <a className="section__button" href="https://www.patreon.com/nickpierson">
          Become a Patron
        </a>
      </div>
      <h3 className="section__subtitle">Donate</h3>
      <p className="section__text">
        If you want to help monetarily but you're not into that Patreon thing,
        I totally understand. I've opened up a Stripe account just for you —
        and you can donate as much or as little as you want.
      </p>
      <DonateForm />
      <h3 className="section__subtitle">Translate this Site</h3>
      <p className="section__text">
        If you would like to see this site in a different language, please
        help me out by submitting your translations to me. I would love to see
        this site be translated into every language.
        Just send an email to
        {' '}<a href="mailto:contact@soundoftext.com">contact@soundoftext.com</a>{' '}
        and say that you want to help translate the site.
      </p>
    </section>
  );
}

export default Contribute;
