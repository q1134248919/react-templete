// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dva from 'dva';
import model from '@/model/index';
// import page from '@/model/page';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createHistory = require('history').createHashHistory;

import reportWebVitals from './reportWebVitals';

const app = dva({
  history: createHistory(),
});
model.forEach((item) => {
  app.model(item);
});
app.router(App);
app.start('#root');

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
