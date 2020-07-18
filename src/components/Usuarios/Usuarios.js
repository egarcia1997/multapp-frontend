import React, { Component, Fragment } from "react";
import axios from "axios";
import { Box, Container, Typography, Tabs, Tab, CircularProgress, List, ListItem, Divider, ListItemAvatar, Avatar, ListItemText, Fab, ListItemSecondaryAction, IconButton, createMuiTheme } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import AgregarUsuario from "./AgregarUsuario/AgregarUsuario";
import EliminarUsuario from "./EliminarUsuario/EliminarUsuario";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { cargarUsuarios, crearUsuario } from "../../store/actions/usuarios";
import { withSnackbar } from "notistack";

class Usuarios extends Component {
    state = {
        pestanaActual: 0,
        agregarUsuario: false,
        eliminarUsuario: false,
    }

    componentDidMount = () => {
        this.props.cargarUsuarios();
    }

    componentDidUpdate = () => {
        if (this.props.error) {
            this.props.enqueueSnackbar(this.props.textoDeError.toString(), {variant: "error"});
        }
    }

    // esta funcion fue copiada de la pagina de https://material-ui.com/components/tabs/#simple-tabs
    // porque importar TabPanel de @material-ui/lab NO ANDA
    TabPanel = (props) => {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
                )}
            </div>
        );
    }

    // metodo para cambiar de pestañas
    tabChangeHandler = (event, newValue) => {
        this.setState({pestanaActual: newValue});
    }
    
    addUserHandler = () => {
        const nuevoEstado = !this.state.agregarUsuario;
        this.setState({agregarUsuario: nuevoEstado});
    }

    deleteUserHandler = () => {
        const nuevoEstado = !this.state.eliminarUsuario;
        this.setState({eliminarUsuario: nuevoEstado});
    }

    userSelectedHandler = (id) => {
        this.props.history.push("/usuarios/" + id);
    }

    render() {
        let inspectores = this.props.usuarios.filter(usuario => {
            return usuario.rol === "Inspector" ? true : false;
        }).map(inspector => (
            <ListItem key={inspector.id} button={true} onClick={() => this.userSelectedHandler(inspector.id)}>
                <ListItemAvatar>
                    <Avatar alt={"Foto de " + inspector.nombre} src={inspector.foto} />
                </ListItemAvatar>
                <ListItemText
                    primary={inspector.apellido + " " + inspector.nombre}
                    secondary={inspector.id}
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={this.deleteUserHandler}>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ));

        let supervisores = this.props.usuarios.filter(usuario => {
            return usuario.rol === "Supervisor" ? true : false;
        }).map(supervisor => (
            <ListItem key={supervisor.id} button={true} onClick={() => this.userSelectedHandler(supervisor.id)}>
                <ListItemAvatar>
                    <Avatar alt={"Foto de " + supervisor.nombre} src={supervisor.foto} />
                </ListItemAvatar>
                <ListItemText
                    primary={supervisor.apellido + " " + supervisor.nombre}
                    secondary={supervisor.id}
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={this.deleteUserHandler}>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ));

        let administradores = this.props.usuarios.filter(usuario => {
            return usuario.rol === "Administrador" ? true : false;
        }).map(administrador => (
            <ListItem key={administrador.id} button={true} onClick={() => this.userSelectedHandler(administrador.id)}>
                <ListItemAvatar>
                    <Avatar alt={"Foto de " + administrador.nombre} src={administrador.foto} />
                </ListItemAvatar>
                <ListItemText
                    primary={administrador.apellido + " " + administrador.nombre}
                    secondary={administrador.id}
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={this.deleteUserHandler}>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ));

        const theme = createMuiTheme();

        return (
            <Fragment>
                <Container maxWidth="lg" style={{minHeight: "100vh"}}>
                    <Tabs value={this.state.pestanaActual} centered={true} onChange={this.tabChangeHandler} indicatorColor="primary" textColor="primary">
                        <Tab label="Inspectores" />
                        <Tab label="Supervisores" />
                        <Tab label="Administradores" />
                        <Tab label="Multados" />
                    </Tabs>
                    <this.TabPanel value={this.state.pestanaActual} index={0}>
                        {this.props.cargando ?
                            <CircularProgress />
                        : "Coso de inspectores"}
                    </this.TabPanel>
                    <this.TabPanel value={this.state.pestanaActual} index={1}>
                        <List>
                            {/* {usuarios} */}
                            <ListItem button={true} onClick={() => this.userSelectedHandler(1)}>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText primary="Juan Pérez" secondary="64ghf8shj23" />
                                <ListItemSecondaryAction>
                                    <IconButton onClick={this.deleteUserHandler}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </List>
                        Coso de supervisores
                    </this.TabPanel>
                    <this.TabPanel value={this.state.pestanaActual} index={2}>
                        Coso de administradores
                    </this.TabPanel>
                    <this.TabPanel value={this.state.pestanaActual} index={3}>
                        Coso de multados
                    </this.TabPanel>
                    <Fab color="primary" onClick={this.addUserHandler} style={{position: "fixed", bottom: theme.spacing(5), right: theme.spacing(5)}}>
                        <Add />
                    </Fab>
                </Container>
                <AgregarUsuario open={this.state.agregarUsuario} onClose={this.addUserHandler} />
                <EliminarUsuario open={this.state.eliminarUsuario} onClose={this.deleteUserHandler} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        usuarios: state.usuarios.usuarios,
        cargando: state.usuarios.cargando,
        error: state.usuarios.error,
        textoDeError: state.usuarios.textoDeError,
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        cargarUsuarios: () => {dispatch(cargarUsuarios())},
        crearUsuario: () => {dispatch(crearUsuario())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(withRouter(Usuarios)));