import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { addEvent } from './redux/events';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

fetch('https://api.github.com/repos/TGmeetup/TGmeetup.github.io/issues?labels=Event&state=open')
  .then(res => res.json())
  .then(issues => issues.map(issue => {
    const reDetailText = /<details>((?:.|[\r\n])*?)<\/detail>/gm;
    const { body } = issue;

    const eventStr = reDetailText.exec(body)[1];
    const event = JSON.parse(eventStr);

    return {
      ...event,
      issue,
    };
  }))
  .then(events => {
    events.forEach(event => {
      store.dispatch(addEvent(event));
    });
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
