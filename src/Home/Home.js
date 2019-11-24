import React, { Component } from 'react';
import ReactGA from 'react-ga';
import SoundsApp from './SoundsApp/SoundsApp';
import About from './About/About';
import Social from './Social/Social';
import Learn from './Learn/Learn';
import Contribute from './Contribute/Contribute';

class Home extends Component {
  constructor() {
    super();

    ReactGA.pageview('/');
  }

  render() {
    return (
      <main>
        <SoundsApp />
        <About />
        <Social />
        <Contribute />
        <Learn />
        <hr className="hr" />
      </main>
    );
  }
}

export default Home;
