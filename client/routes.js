import React       from 'react';
import Main        from './containers/Main.js';
import HomePage    from './containers/HomePage.js';
import CounterPage from './containers/CounterPage.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomePage} />
      <Route path='/counter' component={CounterPage}/>
    </Route>
  </Router>
);
