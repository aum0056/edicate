import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DecodeExpire } from "../../utils/api.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("x-access-token") && DecodeExpire() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
