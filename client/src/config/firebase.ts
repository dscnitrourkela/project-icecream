import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseDevConfig } from './firebase_dev';

export declare var process: {
  env: {
    NODE_ENV: string;
    REACT_APP_apiKey: string;
    REACT_APP_authDomain: string;
    REACT_APP_projectId: string;
    REACT_APP_storageBucket: string;
    REACT_APP_messagingSenderId: string;
    REACT_APP_appId: string;
  };
};

const configureFirebase = async (): Promise<void> => {
  // if (process.env.NODE_ENV === 'development') {
  //   firebase.initializeApp(firebaseDevConfig);
  // } else if (process.env.NODE_ENV === 'production') {
  //   const response = await fetch('/__/firebase/init.json');
  //   const config = await response.json();
  //   firebase.initializeApp(config);
  // }

  firebase.initializeApp(firebaseDevConfig);
};
export default configureFirebase;
