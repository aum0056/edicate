import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const DecodeExpire = () => {
    const token = jwt_decode(localStorage.getItem("x-access-token"));
    const expireToken = token.exp >= Date.now() / 1000;
    if (expireToken === false) {
      localStorage.clear();
    }
    return expireToken
  };


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
