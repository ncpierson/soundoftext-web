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

    if (process.env.REACT_APP_ENV === 'production') {
      ReactGA.initialize('UA-101624095-2');
      ReactGA.pageview('/');
    }
  }

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
