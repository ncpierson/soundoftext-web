import React, { Component } from 'react';
import languages from 'google-tts-languages';

class VoiceOptions extends Component {
  constructor() {
    super();

    this.onVoiceSelected = this.onVoiceSelected.bind(this);
  }

  onVoiceSelected(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const voice = this.props.voice;

    const voiceElems = languages.map(language => {
      return (
        <option key={language.code} value={language.code}>
          {language.name}
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
