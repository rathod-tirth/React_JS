import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// By wrapping App with the Provider component makes the store available to the whole app
// Provider is a bridge which connects redux with react