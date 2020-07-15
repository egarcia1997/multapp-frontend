import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import Logo from "../../components/Logo/Logo";
// aca hay conflicto, en /core e /icons hay un componente llamado Menu
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import {cerrarSesion} from "../../share/cerrarSesion";


class BarraSuperior extends Component {
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

    // metodo que te manda a la pagina para administrar usuarios
    usuariosHandler = () => {
        this.cerrarMenuHandler();
        this.props.history.push("/usuarios");
    }

    // metodo para cerrar sesion
    cerrarSesionHandler = () => {
        this.cerrarMenuHandler();
        cerrarSesion();
    }

    render() {
        return (
            <AppBar position="sticky">
                <Toolbar variant="dense">
                        <Logo width={48} height={48} />
                    <Typography variant="h6" style={{flexGrow: "1"}}>
                        MultApp
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="menu" aria-haspopup="true" onClick={this.abrirMenuHandler}>
                        <AccountCircle />
                    </IconButton>
                    <Menu id="menu" open={this.state.mostrarMenu} onClose={this.cerrarMenuHandler}>
                        <MenuItem onClick={this.multasHandler}>Administrar multas</MenuItem>
                        <MenuItem onClick={this.usuariosHandler}>Administrar usuarios</MenuItem>
                        <MenuItem onClick={this.perfilHandler}>Mi perfil</MenuItem>
                        <MenuItem onClick={this.cerrarSesionHandler}>Cerrar sesión</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(BarraSuperior);