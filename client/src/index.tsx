import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const el = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(app, el);
