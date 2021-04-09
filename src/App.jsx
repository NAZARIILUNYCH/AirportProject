/* eslint-disable import/no-unresolved */
import React from 'react';
import { Provider } from 'react-redux';
import Airport from './components/Airport';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Airport />
  </Provider>
);

export default App;
