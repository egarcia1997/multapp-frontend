import React, {Component} from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Login from "./containers/Login/Login";
import LayoutSupervisor from './containers/LayoutSupervisor/LayoutSupervisor';

class App extends Component {
    render() {
        let rutas = (
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
            </Switch>
        );
        if (localStorage.getItem("localId")) {
            rutas = (
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={LayoutSupervisor} />
                </Switch>
            );
        }

        return (
            <BrowserRouter>
                {rutas}
            </BrowserRouter>
        );
    }
}

export default App;
