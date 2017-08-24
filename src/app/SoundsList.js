import React, { Component } from 'react';
import { storage, database } from '../firebase.js';
import { lookupVoice } from './voices';
import base32 from 'base32';

class SoundsList extends Component {
  render() {
    const $sounds = this.props.sounds.map(sound => {
      const key = `${sound.voice}/${sound.text}`
      return <Sound key={key} sound={sound} />
    });

    const noSounds = $sounds.length === 0;

    return (
      <div className={'sounds ' + (noSounds ? 'sounds--empty' : '')}>
        <h2 className="sounds__title">Sounds</h2>
        { noSounds && (
          <SoundsPlaceholder />
        ) }
        { $sounds }
      </div>
    );
  }
}

class SoundsPlaceholder extends Component {
  state = {
    needsHelp: false
  }

  handleHelpClick = () => {
    this.setState({ needsHelp: true });
  }

  render() {
    const needsHelp = this.state.needsHelp;

    return (
      <div className="well">
        <h2 className="well__title">
          <span>No sounds</span>
          <span className="smiley">:(</span>
        </h2>
        { needsHelp ? (
          <div className="help">
            <h3 className="help__text">Instructions:</h3>
            <ol className="help__steps">
              <li className="help__step">
                In the first text box, enter a word or phrase that you want to hear spoken.
              </li>
              <li className="help__step">
                Choose the most correct voice for the text you entered.
              </li>
              <li className="help__step">
                Hit Submit!
              </li>
            </ol>
          </div>
        ) : (
          <a className="well__link" onClick={this.handleHelpClick}>Need help?</a>
        ) }
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

    lookupSound(text, voice)
      .then(sound => {
        if (sound) {
          return getDownloadUrl(sound.path);
        } else {
          return createSound(text, voice)
            .then(path => saveSound(text, voice, path))
            .then(sound => getDownloadUrl(sound.path));
        }
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
    const text = this.state.text;
    const voice = lookupVoice(this.state.voice);

    return (
      <div className="sound">
        <div className="sound__well">
          <p className="sound__text">{text}</p>
          <span className="sound__voice">{voice}</span>
        </div>
        <div className="sound__actions">
          <a className="action" onClick={this.handlePlay}>Play</a>
          <a className="action" href={this.state.url} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
        <audio src={this.state.url} ref={el => this.audio = el} />
      </div>
    );
  }
}

function lookupSound(text, voice) {
  const key = base32.encode(voice + text);
  const ref = database.ref(`sounds/${key}`);

  return ref.once('value').then(snapshot => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return false;
    }
  });
}

function saveSound(text, voice, path) {
  const key = base32.encode(voice + text);
  const soundRef = database.ref(`sounds/${key}`);

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
