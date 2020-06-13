import React, { Component } from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import MultasResumidas from "../../components/MultasResumidas/MultasResumidas";
import Perfil from "../../components/Perfil/Perfil";
import estilos from "../Layout.module.css";
import Logo from "../../components/Logo/Logo";
// aca hay conflicto, en /core e /icons hay un componente llamado Menu
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle } from "@material-ui/icons";

class LayoutSupervisor extends Component {
    state = {
        mostrarMenu: false,
    }

    // metodo para abrir el menu
    abrirMenuHandler = () => {
        this.setState({mostrarMenu: true});
    }

    // metodo para cerrar el menu
    cerrarMenuHandler = () => {
        this.setState({mostrarMenu: false});
    }

    // metodo que te manda a la pagina para administrar las multas
    multasHandler = () => {
        this.cerrarMenuHandler();
        this.props.history.push("/multas");
    }

    // metodo que te manda a tu perfil
    perfilHandler = () => {
        this.cerrarMenuHandler();
        this.props.history.push("/perfil");
    }

    // metodo para cerrar sesion
    cerrarSesionHandler = () => {
        this.cerrarMenuHandler();
    }

    render() {
        return (
            <div className={estilos.Layout}>
                <AppBar position="sticky">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />{/* aca se tendria que mostrar el logo de multapp */}
                        </IconButton>
                        <Typography variant="h6" style={{flexGrow: "1"}}>
                            MultApp
                        </Typography>
                        <IconButton edge="end" color="inherit" aria-label="menu" aria-haspopup="true" onClick={this.abrirMenuHandler}>
                            <AccountCircle />
                        </IconButton>
                        <Menu id="menu" open={this.state.mostrarMenu} onClose={this.cerrarMenuHandler}>
                            <MenuItem onClick={this.multasHandler}>Administrar multas</MenuItem>
                            <MenuItem onClick={this.perfilHandler}>Mi perfil</MenuItem>
                            <MenuItem onClick={this.cerrarSesionHandler}>Cerrar sesión</MenuItem>
                        </Menu>
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

export default withRouter(LayoutSupervisor);