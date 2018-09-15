import React from 'react';
import ReactDOM from 'react-dom';
import Devtools from 'mobx-react-devtools';
import App from './components/App';

ReactDOM.render(
  <React.Fragment>
    <App />
    <Devtools />
  </React.Fragment>,
  document.getElementById('root')
);
