import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, compose, Store } from 'redux';
import { Provider } from 'react-redux';
import { listReducer } from './store/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(listReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
