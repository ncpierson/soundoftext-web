import React, { Component } from 'react';
import { storage, database } from '../firebase.js';

class SoundsList extends Component {
  render() {
    const soundElems = this.props.sounds.map(sound => {
      const key = `${sound.voice}/${sound.text}`
      return <Sound key={key} sound={sound} />
    });

    return (
      <div className="sounds">
        {soundElems}
      </div>
    );
  }
}

class Sound extends Component {
  constructor(props) {
    super();

    const text = props.sound.text;
    const voice = props.sound.voice;

    this.state = {
      text: text,
      voice: voice
    }

    createSound(text, voice)
      .then(path => {
        return saveSound(text, voice, path);
      })
      .then(sound => {
        return getDownloadUrl(sound.path);
      })
      .then(url => {
        this.setState({
          url: url
        });
      });

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    this.audio.play();
  }

  render() {
    return (
      <div className="sound">
        <h3 className="sound__text">{this.state.text}</h3>
        <div className="sound__voice">{this.state.voice}</div>
        <div className="sound__actions">
          <button className="action" onClick={this.handlePlay}>Play</button>
          <a className="action" href={this.state.url} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
        <audio src={this.state.url} ref={el => this.audio = el} />
      </div>
    );
  }
}

function saveSound(text, voice, path) {
  const soundRef = database.ref('sounds').push();

  const newSound = {
    text: text,
    voice: voice,
    path: path,
    id: soundRef.key
  };

  return soundRef.set(newSound).then(() => newSound);
}

const soundsApi = 'https://sound-of-text-3ba84.firebaseapp.com/sounds';
function createSound(text, voice) {
  const fetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: text, voice: voice })
  };

  return fetch(soundsApi, fetchOptions)
    .then(response => {
      return response.json().then(json => json.path);
    });
}

function getDownloadUrl(path) {
  return storage.ref(path).getDownloadURL();
}

export default SoundsList;
