import { Switch, Route } from 'wouter'
import { Home } from '../pages/home'

export const PageRouter = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/signin-oidc" component={Home} />
    <Route path="/signout-callback-oidc" component={Home} />
  </Switch>
);
