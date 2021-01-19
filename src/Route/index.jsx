import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Custom from "./Custom";
import DetailPage from "./DetailPage";
import SearchPage from "./SearchPage";

const Routes = () => {
  return (
    <Router>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/custom" component={Custom} />
          <Route path="/Detail" component={DetailPage} />
          <Route path="/Subject" component={SearchPage} />
    </Router>
  );
};

export default Routes;
