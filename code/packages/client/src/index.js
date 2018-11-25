import './index.css';
import './theme.css';
import './theme/fl-chapps.css';
import './theme/fl-outicons.css';
import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './reduxx/storeConfig';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
