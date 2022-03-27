import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Login from "./containers/Login";
import Layout from './containers/Layout/Layout';
import { useSelector } from 'react-redux';

const App = () => {
  const idToken = useSelector(state => state.login.idToken);

  const rutas = idToken ?
    (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    ) : (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );

  return (
    <BrowserRouter>
      {rutas}
    </BrowserRouter>
  );
};


export default App;
