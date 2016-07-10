import React       from 'react';
import Main        from './containers/Main.js';
import HomePage    from './containers/HomePage.js';
import CounterPage from './containers/CounterPage.js';

import { Router, Route, IndexRoute } from 'react-router';

let historyType;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development'){
  historyType = require('react-router').browserHistory;
} else {
  historyType = require('react-router').hashHistory;
}

export default (
  <Router history={historyType}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomePage} />
      <Route path='/counter' component={CounterPage}/>
    </Route>
  </Router>
);
