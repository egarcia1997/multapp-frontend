import React, { Component, Fragment } from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Multas from "../../components/Multas/Multas";
import Perfil from "../../components/Perfil/Perfil";
import estilos from "./Layout.module.css";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import { Container, Box } from "@material-ui/core";
import Multa from "../../components/Multa/Multa";
import Usuarios from "../../components/Usuarios/Usuarios";
import Usuario from "../../components/Usuario/Usuario";
import InspectorLogueado from "../../components/InspectorLogueado/InspectorLogueado";

class Layout extends Component {
    render() {
        let routes;
        if (localStorage.getItem("rol") === "Supervisor") {
            routes = (
                <Fragment>
                    <Route path="/multas/:id" exact={true} component={Multa} />
                    <Route path="/multas" component={Multas} />
                    <Redirect from="/" to="/multas" />
                </Fragment>
            );
        }
        else if (localStorage.getItem("rol") === "Administrador") {
            routes = (
                <Fragment>
                    <Route path="/usuarios/:id" exact={true} component={Usuario} />
                    <Route path="/usuarios" component={Usuarios} />
                    <Redirect from="/" to="/usuarios" />
                </Fragment>
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