import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sounds: [
        { text: 'I once ate a pumpkin and boy was it delicious', voice: 'en' },
        { text: 'Eragon voló por la noche', voice: 'es' },
        { text: 'Teeter totters teeter and tot', voice: 'en' },
      ]
    }
  }

  render(){
    return (
      <section id="app">
        <SoundForm />
        <h2 className="title">Sounds</h2>
        <Sounds sounds={this.state.sounds} />
      </section>
    );
  }
}

class SoundForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      voice: 'en'
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleVoiceChange(e) {
    this.setState({ voice: e.target.value });
  }

  render() {
    return (
      <div className="engine">
        <form>
          <div className="input-group engine__text">
            <label for="text">Text:</label>
            <textarea
              name="text" onChange={this.handleTextChange} value={this.state.text}
              rows="2" minLength="0" maxLength="100" required autoFocus
            />
          </div>
          <div className="input-group engine__voice">
            <label for="voice">Voice:</label>
            <select name="voice" value={this.state.voice} onChange={this.handleVoiceChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div className="button-group">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

class Sounds extends Component {
  constructor(props) {
    super();

    this.state = {
      sounds: props.sounds
    }
  }

  render() {
    const soundElems = this.state.sounds.map(sound => {
      return (
        <div className="sound">
          <h3 className="sound__text">{sound.text}</h3>
          <div className="sound__voice">{sound.voice}</div>
          <div className="sound__actions">
            <button className="action">Play</button>
            <button className="action">Download</button>
          </div>
        </div>
      );
    });

    return (
      <div className="sounds">
        {soundElems}
      </div>
    );
  }
}

export default App;
