import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import { OutboundLink } from 'react-ga';
import VoiceOptions from './VoiceOptions';
import './SoundsForm.css';

class SoundsForm extends Component {
  constructor() {
    super();

    let isWelcome = window.localStorage.getItem('isWelcome');
    isWelcome = isWelcome === null ? true : isWelcome === 'true';

    this.state = {
      text: '',
      voice: 'en-US',
      isWelcome: isWelcome
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWelcomeDismiss = this.handleWelcomeDismiss.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleVoiceChange(voice) {
    this.setState({ voice: voice });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text, this.state.voice);
    this.setState({ text: '' });
  }

  handleWelcomeDismiss(e) {
    window.localStorage.setItem('isWelcome', false);
    this.setState({ isWelcome: false });
  }

  render() {
    const keyMap = {
      submit: ['ctrl+enter', 'command+enter']
    };

    const keyHandlers = {
      submit: () => this.submitButton.click()
    };

    return (
      <div className="section">
        <div className="grid">
          {this.state.isWelcome && (
            <div className="grid__item grid__item--thin welcome">
              <p className="section__text">
                Having trouble with the new site? You can still access the old
                one at{' '}
                <OutboundLink to="http://old.soundoftext.com" eventLabel="old">
                  old.soundoftext.com
                </OutboundLink>, but it will only be up for a couple of months.
              </p>
              <div className="welcome__dismiss">
                <a onClick={this.handleWelcomeDismiss}>Dismiss</a>
              </div>
            </div>
          )}
          <form
            className="grid__item grid__item--thin"
            onSubmit={this.handleSubmit}
          >
            <div className="field">
              <label className="field__label" htmlFor="text">
                Text
              </label>
              <HotKeys keyMap={keyMap} handlers={keyHandlers}>
                <textarea
                  name="text"
                  onChange={this.handleTextChange}
                  value={this.state.text}
                  className="field__textarea"
                  rows="2"
                  minLength="0"
                  maxLength="100"
                  required
                  autoFocus
                />
              </HotKeys>
            </div>
            <VoiceOptions
              onChange={this.handleVoiceChange}
              voice={this.state.voice}
            />
            <div className="field">
              <input
                className="field__submit button"
                type="submit"
                ref={el => (this.submitButton = el)}
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SoundsForm;
