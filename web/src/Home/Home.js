import React, { Component } from 'react';
import ReactGA from 'react-ga';

import About from './About/About';
import Banner from './Banner/Banner';
import Contribute from './Contribute/Contribute';
import Learn from './Learn/Learn';
import Social from './Social/Social';
import SoundsApp from './SoundsApp/SoundsApp';

class Home extends Component {
  constructor() {
    super();

    ReactGA.pageview('/');
  }

  render() {
    return (
      <main>
        <Banner />
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
