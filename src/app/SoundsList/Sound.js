import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { lookupVoice } from '../voices';
import { soundsApi } from '../../config';

class Sound extends Component {
  constructor(props) {
    super();

    this.state = {
      error: false,
      loading: true
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
  }

  componentDidMount() {
    this.getSound();
  }

  getSound() {
    const { text, voice } = this.props.sound;

    requestSound(text, voice)
      .then(soundId => {
        return awaitSound(soundId);
      })
      .then(location => {
        this.setState({ loading: false, url: location });
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
  }

  handlePlay(e) {
    this.audio.play();
  }

  handleClear() {
    this.props.onClear(this.props.sound);
  }

  handleRetry() {
    this.setState({ loading: true, error: false });
    this.getSound();
  }

  render() {
    const { text, voice: voiceKey } = this.props.sound;

    const voice = lookupVoice(voiceKey);

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
        {this.state.loading && (
          <div className="overlay">
            <Spinner
              name="line-scale-pulse-out"
              fadeIn="none"
              color="#008B8B"
            />
          </div>
        )}
        {this.state.error && (
          <div className="overlay overlay--vertical">
            <p className="overlay__title">Error</p>
            <div className="overlay__actions">
              <a className="overlay__action" onClick={this.handleClear}>
                Clear
              </a>
              <a className="overlay__action" onClick={this.handleRetry}>
                Retry
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

async function requestSound(text, voice) {
  const fetchOptions = {
    body: JSON.stringify({
      engine: 'Google',
      data: { text, voice }
    }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  };

  const soundResponse = await fetch(`${soundsApi}/sounds`, fetchOptions);
  const responseBody = await soundResponse.json();
  const soundId = responseBody.id;

  return soundId;
}

async function awaitSound(soundId, attempts = 5, delay = 1000) {
  if (attempts < 0) throw new Error('Too many attempts');

  await timeout(delay);

  const response = await fetchSound(soundId);

  if (response.status === 'Error') throw new Error(response.message);

  if (!response.location) {
    return awaitSound(soundId, attempts - 1, delay * 2);
  }

  return response.location;
}

function timeout(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

async function fetchSound(soundId) {
  const response = await fetch(`${soundsApi}/sounds/${soundId}`);
  const body = await response.json();
  return body;
}

export default Sound;
