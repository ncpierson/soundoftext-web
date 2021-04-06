import React, { Component } from 'react';
import SoundsPlaceholder from './SoundsPlaceholder';
import Sound from './Sound';
import './SoundsList.css';

class SoundsList extends Component {
  constructor(props) {
    super();

    this.handleClear = this.handleClear.bind(this);
  }

  handleClear(sound) {
    this.props.onClear(sound);
  }

  render() {
    const $sounds = this.props.sounds.map((sound) => {
      const key = `${sound.voice}/${sound.text}`;
      return (
        <Sound
          key={key}
          sound={sound}
          onClear={this.handleClear}
          voices={this.props.voices}
        />
      );
    });

    const soundsExist = $sounds.length > 0;

    return (
      <div className="section section--colored">
        {soundsExist && (
          <h2 className="section__title section__title--white section__title--small">
            Sounds
          </h2>
        )}
        {soundsExist && <div className="sounds grid">{$sounds}</div>}
        {!soundsExist && <SoundsPlaceholder />}
      </div>
    );
  }
}

export default SoundsList;
