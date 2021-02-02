import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Custom from "./Custom";
import DetailPage from "./DetailPage";
import SearchPage from "./SearchPage";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/login" component={Login} />
      <PrivateRoute path="/custom" component={Custom} />
      <PrivateRoute path="/Detail" component={DetailPage} />
      <PrivateRoute path="/Subject" component={SearchPage} />
    </Router>
  );
};

export default Routes;
