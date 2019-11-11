import React, { Component } from 'react';
import { OutboundLink } from 'react-ga';

class Banner extends Component {
  constructor() {
    super();

    const hasDismissed = localStorage.getItem('hasDismissedBanner') || 'false';

    this.state = { hasDismissed };
  }

  handleDismiss = () => {
    localStorage.setItem('hasDismissedBanner', 'true');
    this.setState({ hasDismissed: 'true' });
  };

  render() {
    const { hasDismissed } = this.state;

    if (hasDismissed === 'true') return null;

    return (
      <section className="section section--colored">
        <div className="grid">
          <div className="card grid__item">
            <div className="card__content">
              <h3 className="card__title">Announcement</h3>
              <p>
                Hello{' '}
                <span role="img" aria-label="hand waving">
                  👋
                </span>
              </p>
              <p>
                I am Nick, the creator of this website. Sound of Text has been a
                free service for over 5 years now. Don't worry, I am not
                planning on charging money or shutting it down. However, I would
                like to add some enhancements and release a paid product.{' '}
                <strong>I need your help</strong> to choose what to do next!
              </p>
              <p>
                So, I have created a survey to help me determine what that
                product should look like. If you have ever wanted a better Sound
                of Text, <strong>please take this survey!</strong> It should
                take under 10 minutes. Thank you!
              </p>
            </div>
            <div className="card__actions">
              <OutboundLink
                className="card__action"
                eventLabel="survey:premium"
                target="_blank"
                to="https://forms.gle/SbignJLoEg3kF3KX9"
              >
                Take Survey
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
