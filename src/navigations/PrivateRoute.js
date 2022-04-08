import { Redirect, Route } from "react-router-dom";
import propTypes from "prop-types";

const PrivateRoute = ({
  component: Component,
  location,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location.pathname },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  location: propTypes.any,
  isAuthenticated: propTypes.bool.isRequired,
  component: propTypes.any,
};
export default PrivateRoute;
