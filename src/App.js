import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Docs from './Docs/Docs';
import Supporters from './Supporters/Supporters';

import './styles/Section.css';
import './styles/Grid.css';
import './styles/Card.css';
import './styles/Button.css';
import './styles/Overlay.css';

class App extends Component {
  constructor() {
    super();

    if (process.env.REACT_APP_ENV === 'production') {
      ReactGA.initialize('UA-101624095-2');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/supporters" component={Supporters} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
