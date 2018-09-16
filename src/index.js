import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

import App from './components/App';
import TemperatureState from './state/Temperature';

ReactDOM.render(
  <React.Fragment>
    <Provider temperatureState={TemperatureState}>
      <App />
    </Provider>
    <Devtools />
  </React.Fragment>,
  document.getElementById('root')
);
