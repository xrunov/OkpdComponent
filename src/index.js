import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Okpd from './Okpd.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/store'
import OkpdConfig from "./configurations/OkpdConfig";

let D;
let getData = async () => {
  try {
    const res = await fetch(OkpdConfig.reqLink)
    if (res.ok) {
      const data = await res.json();
      D = data.data;
      //обработка ошибок
      console.log(D);
    }
  } catch (err) {
    console.log(err);
  }
}

getData();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Okpd />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
