import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './theme.css';
import './theme/fl-chapps.css';
import './theme/fl-outicons.css';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './reduxx/storeConfig';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
