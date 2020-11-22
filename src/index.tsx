import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterStore from './stores/CounterStore';
import MarketStore from './stores/MarketStore';

// Store Mobx
const counter = new  CounterStore();
const market = new MarketStore();

ReactDOM.render(
  <Provider counter={counter} market={market}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();