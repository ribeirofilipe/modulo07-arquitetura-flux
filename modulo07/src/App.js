import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
