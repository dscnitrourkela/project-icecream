import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Libraries
import firebase from 'firebase/app';
import 'firebase/firestore';

import App from './views/App';
import './index.css';

import { firebaseDevConfig } from './config/firebase_dev';
import getFirebaseConfig from './config/firebase_prod';

declare var process: {
  env: {
    NODE_ENV: string;
  };
};

if (process.env.NODE_ENV === 'development') {
  firebase.initializeApp(firebaseDevConfig);
} else if (process.env.NODE_ENV === 'production') {
  const config = getFirebaseConfig();

  firebase.initializeApp(config);
}

ReactDOM.render(<App />, document.querySelector('#root'));
