import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import Home from './home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

// Google Analytics
ReactGA.initialize('UA-101624095-2');
ReactGA.pageview('/');
