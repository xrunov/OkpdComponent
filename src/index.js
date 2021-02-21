import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Okpd from './Okpd.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/store'
import OkpdConfig from "./configurations/OkpdConfig";

let makeTree = (D) => {
  if (!D.some((el, idx, arr) => idx === 0 ? false : el.Code.startsWith(arr[idx-1].Code+"."))) {
    return [];
  }

  let firstLevel = D[0].Code;

  return D.reduce((prev, item) => {
    if (item.Code === firstLevel) return prev;
    if (!item.Code.startsWith(firstLevel+".")) {
      firstLevel = item.Code;
      prev.push({...item, subCategory: []});
      return prev;
    }
    prev[prev.length-1].subCategory.push(item);
    return prev;
  }, [{...D[0], subCategory: []}])
    .map(item => ({
      ...item,
      subCategory: makeTree(item.subCategory)
    }));
}


let getData = async () => {
  try {
    const res = await fetch(OkpdConfig.reqLink)
    if (res.ok) {
      const data = await res.json();
      let D = data.data;
      console.log(D);
      const tree = makeTree(D);
      console.log(tree);
      return D;
    }
  } catch (err) {
    console.log(err);
  }
}

let data = getData();
console.log(data);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Okpd />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
