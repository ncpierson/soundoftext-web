import React, { Component } from 'react';

class VoiceOptions extends Component {
  constructor() {
    super();

    this.onVoiceSelected = this.onVoiceSelected.bind(this);
  }

  onVoiceSelected(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { voices, voice } = this.props;

    const voiceElems = voices.map((voice) => {
      return (
        <option key={voice.code} value={voice.code}>
          {voice.name}
        </option>
      );
    });

    return (
      <div className="field">
        <label className="field__label" htmlFor="voice">
          Voice
        </label>
        <select
          className="field__select"
          disabled={voices.length === 0}
          name="voice"
          value={voice}
          onChange={this.onVoiceSelected}
        >
          {voiceElems}
        </select>
      </div>
    );
  }
}

export default VoiceOptions;
