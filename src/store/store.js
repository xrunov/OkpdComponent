import { createStore, applyMiddleware } from 'redux';
import treeListChanger from './reducers/treeListChanger';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(treeListChanger, composeWithDevTools(applyMiddleware(thunk)));

export default store;