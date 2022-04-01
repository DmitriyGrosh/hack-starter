import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AuthProvider from '../features/authProvider';
import Router from '../router';

import { store } from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
