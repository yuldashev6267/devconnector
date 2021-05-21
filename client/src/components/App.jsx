import React, { useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import store from "../store";
import history from "../history";
import { myAccount, myProfile } from "../actions";
import setAuthToken from "../utils/setAuthToken";
import FirstPage from "../pages/FirstPage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import CreateProfile from "../pages/CreateProfile";
import AddEducation from "../pages/AddEducation";
import AddExpirence from "../pages/AddExpirence";
import Navigation from "./Navigation";
import ProtectedRouter from "./ProtectedRouter";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(myAccount());
  }, []);
  return (
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/" exact>
          <FirstPage />
        </Route>
        <ProtectedRouter
          path="/createprofile"
          component={CreateProfile}
          exact
        />
        <ProtectedRouter path="/add-education" component={AddEducation} exact />
        <ProtectedRouter path="/add-expirence" component={AddExpirence} exact />
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
