import React, { Component, Fragment } from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Multas from "../../components/Multas";
import Perfil from "../../components/Perfil";
import estilos from "./Layout.module.css";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import { Container, Box } from "@material-ui/core";
import Multa from "../../components/Multa";
import Usuarios from "../../components/Usuarios";
import Usuario from "../../components/Usuario";
import InspectorLogueado from "../../components/InspectorLogueado/InspectorLogueado";
import Vehiculos from "../../components/Vehiculos";

class Layout extends Component {
    render() {
        let routes;
        if (localStorage.getItem("rol") === "Supervisor") {
            routes = (
                <Fragment>
                    <Route path="/multas/:id" exact={true} component={Multa} />
                    <Route path="/multas" exact={true} component={Multas} />
                    <Redirect from="/" to="/multas" />
                </Fragment>
            );
        }
        else if (localStorage.getItem("rol") === "Administrador") {
            routes = (
                <Switch>
                    <Route path="/usuarios/:id" exact={true} component={Usuario} />
                    <Route path="/usuarios" exact={true} component={Usuarios} />
                    <Route path="/vehiculos" exact={true} component={Vehiculos} />
                    <Redirect from="/" to="/usuarios" />
                </Switch>
            );
        }
        else if (localStorage.getItem("rol") === "Inspector") {
            routes = (
                <Fragment>
                    <Route path="/notallowed" component={InspectorLogueado} />
                    <Redirect from="/" to="/notallowed" />
                </Fragment>
            )
        }

        return (
            <Box className={estilos.Layout}>
                <BarraSuperior />
                <Container className={estilos.Contenido}>
                    <Switch>
                        <Route path="/perfil" component={Perfil} />
                        {routes}
                    </Switch>
                </Container>
            </Box>
        );
    }
}

export default withRouter(Layout);