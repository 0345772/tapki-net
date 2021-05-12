import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoyndry from './components/error-boundry';
import TapkistoreService from './services/tapkistore-service';
import {TapkistoreServiceProvider} from './components/tapkistore-service-context';
import store from './store';

const tapkistoreService = new TapkistoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoyndry>
      <TapkistoreServiceProvider value={tapkistoreService}>
        <Router>
          <App/>
        </Router>
      </TapkistoreServiceProvider>
    </ErrorBoyndry>
  </Provider>,
  document.getElementById('root')
)