// import antd lib style
import 'antd/dist/antd.css';

// import font style
import './theme/fl-chapps.css';

// import icon style
import './theme/fl-outicons.css';

// import theme style
import './theme.css';

// import custom style
import './index.css';

// import React module from react for JSX
import React from 'react';

// import ReactDOM module from react for render
import ReactDOM from 'react-dom';

// import Provider module from react-redux for redux
import { Provider } from 'react-redux';

// import App Component
import App from './App';

// import store config for redux
import store from './reduxx/storeConfig';

// import registerServiceWorker function
import registerServiceWorker from './registerServiceWorker';

// ReactDOM render all app to div id root in public index.html
ReactDOM.render(
  // create new redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
