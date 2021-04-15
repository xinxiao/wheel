import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { FirebaseAppProvider } from 'reactfire';

import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import './index.scss';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider
      suspense={true}
      firebaseConfig={{
        apiKey: "AIzaSyDeVEPCWK9M_U_kbexvob1VlpjUf7eYt8w",
        authDomain: "wheel-4920c.firebaseapp.com",
        projectId: "wheel-4920c",
        storageBucket: "wheel-4920c.appspot.com",
        messagingSenderId: "221431627108",
        appId: "1:221431627108:web:17babd9d414e56a1eace71",
        measurementId: "G-PFYRLTBPQ6"
      }} >
      <Grommet theme={grommet} full={true}>
        <App />
      </Grommet>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
