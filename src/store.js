import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers';
import { defaultState } from './defaults';

let initialState = defaultState;

if(typeof window !== 'undefined'){
  initialState = window.__PRELOADED_STATE__;

  delete window.__PRELOADED_STATE__;
}

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, composeWithDevTools());

export const store = configureStore(initialState);
