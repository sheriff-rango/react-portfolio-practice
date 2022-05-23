import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './context/State';
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <StateProvider>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById('root')
);



