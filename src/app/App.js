import React, { Component } from 'react';
import SoundForm from './SoundForm';
import SoundsList from './SoundsList';
import { storage } from '../firebase';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sounds: []
    };

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
        <SoundsList sounds={this.state.sounds} />
      </section>
    );
  }
}


export default App;
