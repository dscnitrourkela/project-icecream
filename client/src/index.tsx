import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import App from './views/App';

import configureFirebase from './config/firebase';

configureFirebase().then(() => {
  // const App = await import('./views/App');
  ReactDOM.render(<App />, document.getElementById('root'));
});
