import React from "react";
import { Route, Redirect } from "react-router-dom";
// import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const token = jwt_decode(localStorage.getItem("x-access-token"), { header: true }).exp
  // const expireToken = token >= Date.now() / 1000;
  
  // if (expireToken) {
  //   localStorage.clear()
  // }

  return (
    <Route
      {...rest}
      render={(props) =>
        // localStorage.getItem("x-access-token") && expireToken ? (
        localStorage.getItem("x-access-token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
