import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const expireToken =
    jwt_decode(localStorage.getItem("x-access-token")).exp >= Date.now() / 1000;

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("x-access-token") && expireToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
