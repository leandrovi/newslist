import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Feed from '../pages/Feed';
import Trending from '../pages/Trending';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Feed} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/trending" component={Trending} />
  </Switch>
);

export default Routes;
