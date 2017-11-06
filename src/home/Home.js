import React, { Component } from 'react';
import Header from '../header/Header';
import App from '../app/App';
import About from '../about/About';
import Social from '../social/Social';
import Learn from '../learn/Learn';
import Contribute from '../contribute/Contribute';
import Footer from '../footer/Footer';

import './Button.css';
import './Card.css';
import './Grid.css';
import './Overlay.css';
import './Section.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

function Main(props) {
  return (
    <main>
      <App />
      <About />
      <Social />
      <Contribute />
      <Learn />
    </main>
  );
}

export default Home;
