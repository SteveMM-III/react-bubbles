import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Switch>
          <PrivateRoute path='/protected'>
            <Route exact path='/protected' component={ BubblePage } />
          </PrivateRoute>
          <Route exact path='/login' render={ ( props ) =>
            <Login { ...props } /> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
