import React, { Component } from 'react';

class SoundsList extends Component {
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
      <div className="sound">
        <h3 className="sound__text">{sound.text}</h3>
        <div className="sound__voice">{sound.voice}</div>
        <div className="sound__actions">
          <button className="action" onClick={this.handlePlay}>Play</button>
          <a className="action" href={sound.url} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
        <audio src={sound.url} ref={el => this.audio = el} />
      </div>
    );
  }
}

export default SoundsList;
