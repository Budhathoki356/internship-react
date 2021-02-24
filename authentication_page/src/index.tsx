import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseConfig from './firebase';
import { FirebaseAppProvider } from "reactfire";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<h3>Loading...</h3>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);