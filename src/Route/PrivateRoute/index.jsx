import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DecodeExpire } from "../../utills/expCheck";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        DecodeExpire() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
