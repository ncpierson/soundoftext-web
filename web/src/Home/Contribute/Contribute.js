import React from 'react';
import { OutboundLink } from 'react-ga';
import DonateForm from './DonateForm';
import './Contribute.css';

function Contribute(props) {
  return (
    <section id="contribute">
      <div className="section">
        <h2 className="section__title">Contribute</h2>
        <p className="section__text">
          This website doesn't run for free. I appreciate anything you do to
          help! You can support me on Patreon, donate directly, or help
          translate the site.
        </p>
        <h3 className="section__subtitle">Patreon</h3>
        <p className="section__text">
          I recently started a Patreon and I'm hoping for this to be the best
          way for me to get feedback from my users and to receive donations. I
          will try to host regular polls and engage with the community to see
          what you want — as well as rewarding users who decide to donate.
        </p>
      </div>
      <div className="section section--colored">
        <div className="grid">
          <div className="grid__item grid__item--thin">
            <OutboundLink
              eventLabel="patreon"
              to="https://www.patreon.com/florabtw"
              className="button button--white"
            >
              Become a Patron
            </OutboundLink>
          </div>
        </div>
      </div>
      {/* <div className="section"> */}
      {/*   <div> */}
      {/*     <h3 className="section__subtitle">Donate</h3> */}
      {/*     <p className="section__text"> */}
      {/*       If you want to help monetarily but you aren't into that Patreon */}
      {/*       thing, I totally understand. I've opened up a Stripe account just */}
      {/*       for you — and you can donate as much or as little as you want. */}
      {/*     </p> */}
      {/*     <DonateForm /> */}
      {/*   </div> */}
      {/* </div> */}
    </section>
  );
}

export default Contribute;
