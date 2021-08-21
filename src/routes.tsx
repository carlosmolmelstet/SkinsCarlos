import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Champion from './pages/Champion/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/champion/:name" component={Champion} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
