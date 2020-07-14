import React, {Component} from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import * as placeholder from "./assets/placeholder-vault-boy.png";
import Login from "./containers/Login/Login";
import LayoutSupervisor from './containers/LayoutSupervisor/LayoutSupervisor';

class App extends Component{
    state = {
        usuario: {
            nombre: "Juan Pérez",
            imagen: placeholder,
        }
    }

    render() {
        let rutas = (
            <Switch>
                <Route path="/" component={Login} />
                <Redirect to="/" />
            </Switch>
        );
        if (localStorage.getItem("localId")) {
            rutas = (
                <Switch>
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
