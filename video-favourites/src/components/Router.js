import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/videos' />
      </Route>
      <Route exact path='/videos' component={List} />
      <Route path='/videos/:id' component={Detail} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
