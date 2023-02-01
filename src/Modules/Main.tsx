import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Home, Signup } from '../Pages';

export const ModuleMain = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact={true} render={() => <Home />} />
        <Route path={'/about'} exact={true} render={() => <About />} />
        <Route path={'/signup'} exact={true} render={() => <Signup />} />
      </Switch>
    </BrowserRouter>
  );
};
