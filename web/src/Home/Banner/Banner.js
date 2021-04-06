import React, { Component } from 'react';
import { OutboundLink } from 'react-ga';

const NAME = 'HEARLING_PRO';

class Banner extends Component {
  constructor() {
    super();

    const dismissedBanner = localStorage.getItem('dismissedBanner') || '';
    const hasDismissed = dismissedBanner === NAME;

    this.state = { hasDismissed };
  }

  handleDismiss = () => {
    localStorage.setItem('dismissedBanner', NAME);
    this.setState({ hasDismissed: true });
  };

  render() {
    const { hasDismissed } = this.state;

    if (hasDismissed) return null;

    return (
      <section className="section section--colored">
        <div className="grid">
          <div className="card grid__item">
            <div className="card__content">
              <h3 className="card__title">
                <span>🥳</span> <span> Just Launched: Hearling Pro</span>
              </h3>
              <p>
                Hearling is a website meant to be an improved version of Sound
                of Text, made by the same creator. Now, the Pro version has been
                launched!
              </p>
              <p>
                For $5 per month, you get up to 250 thousand characters of
                high-quality voices. You can also create and download up to 50
                clips at once. If this sounds interesting to you, please check
                it out!
              </p>
            </div>
            <div className="card__actions">
              <OutboundLink
                className="card__action"
                eventLabel="hearling:pro"
                target="_blank"
                to="https://hearling.com"
              >
                Visit Hearling
              </OutboundLink>
              <button className="card__action" onClick={this.handleDismiss}>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
