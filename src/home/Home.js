import React, { Component } from 'react';
import Header from '../header/Header';
import App from '../app/App';
import About from '../about/About';
import Social from '../social/Social';
import Learn from '../learn/Learn';
import Contribute from '../contribute/Contribute';

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

function Footer(props) {
  return (
    <footer>
      <a href="https://twitter.com/NickOnTheWeb">Twitter</a>
      |
      <a href="mailto:contact@soundoftext.com">contact@soundoftext.com</a>
    </footer>
  );
}

export default Home;
