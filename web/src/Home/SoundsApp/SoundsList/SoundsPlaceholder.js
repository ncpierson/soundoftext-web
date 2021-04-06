import React, { Component } from 'react';

class SoundsPlaceholder extends Component {
  state = {
    needsHelp: false,
  };

  handleHelpClick = () => {
    this.setState({ needsHelp: true });
  };

  render() {
    const needsHelp = this.state.needsHelp;

    return (
      <div className="sounds-placeholder">
        <h2 className="section__message">
          <span>No sounds</span>
          <span className="smiley">:(</span>
        </h2>
        {needsHelp ? (
          <div className="grid">
            <div className="card grid__item">
              <div className="card__content">
                <h3 className="card__title">Instructions</h3>
                <ol className="help">
                  <li className="help__step">
                    In the first text box, enter a word or phrase that you want
                    to hear spoken.
                  </li>
                  <li className="help__step">
                    Choose the most correct voice for the text you entered.
                  </li>
                  <li className="help__step">Hit Submit!</li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          <a className="section__link" onClick={this.handleHelpClick}>
            Need help?
          </a>
        )}
      </div>
    );
  }
}

export default SoundsPlaceholder;
