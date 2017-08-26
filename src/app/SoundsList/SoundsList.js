import React, { Component } from 'react';
import { storage, database } from '../../firebase.js';
import { lookupVoice } from '../voices';
import base32 from 'base32';
import './SoundsList.css';

class SoundsList extends Component {
  render() {
    const $sounds = this.props.sounds.map(sound => {
      const key = `${sound.voice}/${sound.text}`
      return <Sound key={key} sound={sound} />
    });

    const soundsExist = $sounds.length > 0;

    return (
      <div className="section section--colored">
        { soundsExist && (
          <h2 className="section__title section__title--white section__title--small">Sounds</h2>
        ) }
        { soundsExist && (
          $sounds
        ) }
        { !soundsExist && (
          <SoundsPlaceholder />
        ) }
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
      <div>
        <h2 className="section__message">
          <span>No sounds</span>
          <span className="smiley">:(</span>
        </h2>
        { needsHelp ? (
          <div className="card">
            <div className="card__content">
              <h3 className="card__title">Instructions</h3>
              <ol className="help">
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
          </div>
        ) : (
          <a className="section__link" onClick={this.handleHelpClick}>Need help?</a>
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
      <div className="card sound">
        <div className="card__content sound__content">
          <p className="sound__text">{text}</p>
          <span className="sound__voice">{voice}</span>
        </div>
        <div className="card__actions">
          <a className="card__action" onClick={this.handlePlay}>Play</a>
          <a className="card__action" href={this.state.url} download>Download</a>
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
