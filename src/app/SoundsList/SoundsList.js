import React, { Component } from 'react';
import { lookupVoice } from '../voices';
import { soundsApi } from '../../config';
import './SoundsList.css';

class SoundsList extends Component {
  render() {
    const $sounds = this.props.sounds.map(sound => {
      const key = `${sound.voice}/${sound.text}`;
      return <Sound key={key} sound={sound} />;
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

class SoundsPlaceholder extends Component {
  state = {
    needsHelp: false
  };

  handleHelpClick = () => {
    this.setState({ needsHelp: true });
  };

  render() {
    const needsHelp = this.state.needsHelp;

    return (
      <div className="sounds-placeholder">
        <h2 className="section__message">
          <span>No sounds</span>
          <span className="smiley">:(</span>
        </h2>
        {needsHelp ? (
          <div className="grid">
            <div className="card grid__item">
              <div className="card__content">
                <h3 className="card__title">Instructions</h3>
                <ol className="help">
                  <li className="help__step">
                    In the first text box, enter a word or phrase that you want
                    to hear spoken.
                  </li>
                  <li className="help__step">
                    Choose the most correct voice for the text you entered.
                  </li>
                  <li className="help__step">Hit Submit!</li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          <a className="section__link" onClick={this.handleHelpClick}>
            Need help?
          </a>
        )}
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
    };

    this.handlePlay = this.handlePlay.bind(this);
  }

  async componentDidMount() {
    const fetchOptions = {
      body: JSON.stringify({
        engine: 'Google',
        data: this.state
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    };

    const soundResponse = await fetch(`${soundsApi}/sounds`, fetchOptions);
    const responseBody = await soundResponse.json();
    const soundId = responseBody.id;

    this.awaitSound(soundId);
  }

  // TODO don't assume success
  async awaitSound(soundId) {
    const response = await fetch(`${soundsApi}/sounds/${soundId}`);
    const body = await response.json();

    if (!body.location) {
      setTimeout(() => this.awaitSound(soundId), 1000);
      return;
    }

    this.setState({
      url: body.location
    });
  }

  handlePlay(e) {
    this.audio.play();
  }

  render() {
    const text = this.state.text;
    const voice = lookupVoice(this.state.voice);

    return (
      <div className="card grid__item sound">
        <div className="card__content sound__content">
          <p className="sound__text">{text}</p>
          <span className="sound__voice">{voice}</span>
        </div>
        <div className="card__actions">
          <a className="card__action" onClick={this.handlePlay}>
            Play
          </a>
          <a className="card__action" href={this.state.url} download>
            Download
          </a>
        </div>
        <audio src={this.state.url} ref={el => (this.audio = el)} />
      </div>
    );
  }
}

export default SoundsList;
