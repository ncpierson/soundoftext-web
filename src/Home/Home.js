import React, { Component } from 'react';
import SoundsApp from './SoundsApp/SoundsApp';
import About from './About/About';
import Social from './Social/Social';
import Learn from './Learn/Learn';
import Contribute from './Contribute/Contribute';

class Home extends Component {
  render() {
    return (
      <main>
        <SoundsApp />
        <About />
        <Social />
        <Contribute />
        <Learn />
      </main>
    );
  }
}

export default Home;
