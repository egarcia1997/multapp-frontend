import React, { Component } from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Multas from "../../components/Multas/Multas";
import Perfil from "../../components/Perfil/Perfil";
import estilos from "./Layout.module.css";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import { Container, Box } from "@material-ui/core";
import Multa from "../../components/Multa/Multa";
import Usuarios from "../../components/Usuarios/Usuarios";
import Usuario from "../../components/Usuario/Usuario";

class Layout extends Component {

    render() {
        return (
            <Box className={estilos.Layout}>
                <BarraSuperior />
                <Container className={estilos.Contenido}>
                    <Switch>
                        <Route path="/multas/:id" exact={true} component={Multa} />
                        <Route path="/multas" component={Multas} />
                        <Route path="/perfil" component={Perfil} />
                        <Route path="/usuarios/:id" exact={true} component={Usuario} />
                        <Route path="/usuarios" component={Usuarios} />
                        {/* esto es temporal, esta para probar nomas */}
                        <Redirect from="/" to="/multas" />
                    </Switch>
                </Container>
            </Box>
        );
    }
}

export default withRouter(Layout);