import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import HomePage from 'views/HomePage';
import NewsPage from 'views/NewsPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import BookmarkPage from 'views/BookmarkPage';

import {ContextProvider} from './context';

let hist = createBrowserHistory();

ReactDOM.render(
    <ContextProvider>
      <Router history={hist}>
        <Switch>
          <Route path="/news/:portal/:id" component={NewsPage}/>
          <Route path="/bookmark" component={BookmarkPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    </ContextProvider>,
    document.getElementById('root'),
);
