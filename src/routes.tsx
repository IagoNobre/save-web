import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="*" exact component={NotFound} />
      <Route path="/privacy" exact component={Privacy}></Route>
    </BrowserRouter>
  );
}

export default Routes;
