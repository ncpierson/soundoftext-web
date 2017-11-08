import React, { Component } from 'react';
import SoundsForm from './SoundsForm/SoundsForm.js';
import SoundsList from './SoundsList/SoundsList.js';
import 'whatwg-fetch';

class SoundsApp extends Component {
  constructor() {
    super();

    this.state = {
      sounds: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
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
    return (
      <section id="app">
        <SoundsForm onSubmit={this.handleSubmit} />
        <SoundsList sounds={this.state.sounds} onClear={this.handleClear} />
      </section>
    );
  }
}

export default SoundsApp;
