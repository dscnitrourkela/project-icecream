import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

import configureFirebase from './config/firebase';

configureFirebase().then(async () => {
  const App = await import('./views/App');
  ReactDOM.render(<App.default />, document.getElementById('root'));
});
