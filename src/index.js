import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import './styles/main.scss';
import App from './App';

const JSX = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(JSX, document.getElementById('root'));
