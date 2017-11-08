import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Docs from './Docs/Docs';

import './styles/Button.css';
import './styles/Card.css';
import './styles/Grid.css';
import './styles/Overlay.css';
import './styles/Section.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/api" component={Docs} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;