import React, { Component } from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import MultasResumidas from "../../components/MultasResumidas/MultasResumidas";
import Perfil from "../../components/Perfil/Perfil";
import estilos from "../Layout.module.css";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import { Menu, AccountCircle } from "@material-ui/icons";

class LayoutSupervisor extends Component {
    render() {
        return (
            <div className={estilos.Layout}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" style={{flexGrow: "1"}}>
                            MultApp
                        </Typography>
                        <IconButton edge="end" color="inherit" aria-label="menu">
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={estilos.Contenido}>
                    <Switch>
                        <Route path="/multas" render={() => <MultasResumidas nombreUsuario={this.props.usuario.nombre} />} />
                        <Route path="/perfil" component={Perfil} />
                        {/* esto es temporal, esta para probar nomas */}
                        <Redirect from="/" to="/multas" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default LayoutSupervisor;