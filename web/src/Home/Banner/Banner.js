import React, { Component } from 'react';
import { OutboundLink } from 'react-ga';

const NAME = 'HEARLING_REMINDER_20210419';

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
                <span aria-label="sparkles" role="img">
                  ✨
                </span>{' '}
                <span>Try Hearling!</span>
              </h3>
              <p>
                Interested in high quality voices, or tired of the 200 character
                limit on Sound of Text? Try Hearling! You will gain access to
                over 200 voices, in 34 different languages ‒ powered by machine
                learning.
              </p>
              <p>
                <em>This isn't just an ad!</em> Hearling is made by the same
                developer as Sound of Text, and I encourage you to try it out!
                It is completely free, or you can subscribe to Hearling Pro for
                $5 per month to gain access to quicker clip creation (and
                support the developer!)
              </p>
            </div>
            <div className="card__actions">
              <OutboundLink
                className="card__action"
                eventLabel="hearling:banner"
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
