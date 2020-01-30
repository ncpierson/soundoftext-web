import React, { Component } from 'react';
import { OutboundLink } from 'react-ga';

const NAME = 'HEARLING_LAUNCH';

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
              <h3 className="card__title">Announcement</h3>
              <p>
                Sound of Text v2 is here... and it's called Hearling! Hearling
                has more voice options to choose from: gender, quality, and
                dialect for example. You can also create clips up to 5,000
                characters long, as well as save them for later.{' '}
                <strong>Please check it out</strong> and let me know what you
                think!
              </p>
            </div>
            <div className="card__actions">
              <OutboundLink
                className="card__action"
                eventLabel="hearling:launch"
                target="_blank"
                to="https://hearling.com"
              >
                Check it out
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
