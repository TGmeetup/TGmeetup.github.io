import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
  }));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
