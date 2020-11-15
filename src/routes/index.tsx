import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Monitoramento from '../pages/Monitoramento';
import Tag from '../pages/Tag';
import Insights from '../pages/Insights';
import Post from '../pages/Post';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/monitoramento" component={Monitoramento} />
      <Route path="/tag" component={Tag} />
      <Route path="/insights" component={Insights} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  );
}

export default Routes;