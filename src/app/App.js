import React, { Component } from 'react';
import { storage } from '../firebase';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sounds: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(text, voice) {
    fetch('https://sound-of-text-3ba84.firebaseapp.com/sounds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text, voice: voice })
    }).then(response => {
      return response.json();
    }).then(json => {
      return storage.ref(json.path).getDownloadURL();
    }).then(url => {
      const newSound = {
        id: Math.floor(Math.random() * 100),
        text: text,
        voice: voice,
        url: url
      };

      this.setState(prevState => {
        return { sounds: [newSound].concat(prevState.sounds) }
      });
    });
  }

  render(){
    return (
      <section id="app">
        <SoundForm onSubmit={this.handleSubmit} />
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleVoiceChange(e) {
    this.setState({ voice: e.target.value });
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
          <div className="input-group engine__voice">
            <label htmlFor="voice">Voice:</label>
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
  }

  render() {
    const soundElems = this.props.sounds.map(sound => {
      return <Sound key={sound.id} sound={sound} />
    });

    return (
      <div className="sounds">
        {soundElems}
      </div>
    );
  }
}

class Sound extends Component {
  constructor() {
    super();

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    this.audio.play();
  }

  render() {
    const sound = this.props.sound;

    return (
      <div className="sound" key={sound.id}>
        <h3 className="sound__text">{sound.text}</h3>
        <div className="sound__voice">{sound.voice}</div>
        <div className="sound__actions">
          <button className="action" onClick={this.handlePlay}>Play</button>
          <button className="action">Download</button>
        </div>
        <audio src={sound.url} ref={el => this.audio = el} />
      </div>
    );
  }
}

export default App;
