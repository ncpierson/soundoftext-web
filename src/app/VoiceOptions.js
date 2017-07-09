import React, { Component } from 'react';
import voices from './voices';

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

    const voiceElems = voices.map(voice => {
      return <option key={voice.key} value={voice.key}>{voice.value}</option>
    });

    return (
      <div className="input-group engine__voice">
        <label htmlFor="voice">Voice:</label>
        <select name="voice" value={voice} onChange={this.onVoiceSelected}>
          {voiceElems}
        </select>
      </div>
    );
  }
}


export default VoiceOptions;
