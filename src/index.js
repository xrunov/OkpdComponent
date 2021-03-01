import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Okpd from './Okpd.js';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Okpd />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();




