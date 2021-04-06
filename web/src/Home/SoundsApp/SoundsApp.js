import React, { Component } from 'react';
import 'whatwg-fetch';

import SoundsForm from './SoundsForm/SoundsForm.js';
import SoundsList from './SoundsList/SoundsList.js';
import { soundsApi } from '../../config';

class SoundsApp extends Component {
  constructor() {
    super();

    this.state = {
      sounds: [],
      voices: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    fetch(`${soundsApi}/voices`)
      .then(res => res.json())
      .then(voices => this.setState({ voices }));
  }

  handleSubmit(text, voice) {
    const texts = text
      .split('\n')
      .reverse()
      .filter(s => s);
    const sounds = texts.map(text => ({ text, voice }));

    this.setState(prevState => {
      return {
        sounds: sounds.concat(prevState.sounds)
      };
    });
  }

  handleClear(sound) {
    const sounds = this.state.sounds.filter(s => s !== sound);

    this.setState({ sounds });
  }

  render() {
    const { sounds, voices } = this.state;
    return (
      <section id="app">
        <SoundsForm onSubmit={this.handleSubmit} voices={voices} />
        <SoundsList
          sounds={sounds}
          onClear={this.handleClear}
          voices={voices}
        />
      </section>
    );
  }
}

export default SoundsApp;
