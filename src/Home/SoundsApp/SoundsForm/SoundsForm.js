import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import VoiceOptions from './VoiceOptions';
import './SoundsForm.css';

class SoundsForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      voice: 'en-US'
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
                  maxLength="200"
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
