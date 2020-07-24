import React, {Component} from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Login from "./containers/Login/Login";
import Layout from './containers/Layout/Layout';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        let rutas = (
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
            </Switch>
        );
        if (this.props.sesionIniciada) {
            rutas = (
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Layout} />
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

const mapStateToProps = state => {
    return {
        sesionIniciada: state.login.idToken !== "" || localStorage.getItem("idToken"),
    }
}
export default connect(mapStateToProps)(App);