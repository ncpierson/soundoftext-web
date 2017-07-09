import React, { Component } from 'react';
import VoiceOptions from './VoiceOptions';

class SoundForm extends Component {
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
    return (
      <div className="engine">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group engine__text">
            <label htmlFor="text">Text:</label>
            <textarea
              name="text" onChange={this.handleTextChange} value={this.state.text}
              rows="2" minLength="0" maxLength="100" required autoFocus
            />
          </div>
          <VoiceOptions onChange={this.handleVoiceChange} voice={this.state.voice} />
          <div className="button-group">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SoundForm;
