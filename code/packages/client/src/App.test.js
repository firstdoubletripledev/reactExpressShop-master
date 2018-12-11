// import React module from react for JSX
import React from 'react';

// import ReactDOM module from react for renders
import ReactDOM from 'react-dom';

// import App component
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
