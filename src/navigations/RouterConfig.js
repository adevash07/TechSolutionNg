import Loading from "components/loading/Loading";
import { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import RestrictedRoutes from "./RestrictedRoutes";
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "./CONSTANTS";
const Home = lazy(() => import("pages/home"));
const Login = lazy(() => import("pages/login"));
const SignUp = lazy(() => import("pages/signup"));

const RouterConfig = () => {
  const isAuthenticated = true;
  const location = useLocation();
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route exact path={LOGIN_ROUTE} component={Login} />
        <Route path={SIGNUP_ROUTE} component={SignUp} />
        <RestrictedRoutes
          isAuthenticated={isAuthenticated}
          location={location}
        />
      </Switch>
    </Suspense>
  );
};

export default RouterConfig;
