import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import Verb from './grammar/verb';
import Create from './grammar/verb/create';
import Detail from './grammar/verb/detail';
import './vendor/material/css/material.min.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/verb' component={Verb} />
          <Route exact path='/verb/create' component={Create} />
          <Route exact path='/verb/detail/:id' component={Detail} />
        </Switch>
      </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
