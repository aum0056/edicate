import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from './Login'

const Routes = () => {
    return (
      <Router>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
      </Router>
    );
  };
  
  export default Routes;