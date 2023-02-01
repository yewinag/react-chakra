import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppLayout } from '../Layouts';
import { About, Home, Signup } from '../Pages';

export const ModuleMain = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route: IRoute, index) => (
          <ComponentRoute key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export const ComponentRoute = (props: IRoute) => {
  const Component = props.component;
  const Layout = props.layout;
  const { path, exact } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

const routes: IRoute[] = [
  { path: '/', component: Home, layout: AppLayout, exact: true },
  { path: '/about', component: About, layout: AppLayout, exact: true },
  { path: '/signup', component: Signup, layout: AppLayout, exact: true },
  { path: '/login', component: Signup, layout: AppLayout, exact: true },
];
const PATH_HOME = '/';
const PATH_ABOUT = '/about';
const PATH_LOGIN = '/login';
const PATH_SIGNUP = '/signup';

const isAuthRoutes = [PATH_HOME, PATH_ABOUT];
const normalRoutes = [PATH_LOGIN, PATH_SIGNUP];

interface IRoute {
  path: string;
  component: React.ComponentType;
  layout: React.ComponentType<ILayout>;
  exact: boolean;
}

interface ILayout {
  children?: JSX.Element;
}
