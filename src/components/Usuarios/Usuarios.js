import React, { Component, Fragment } from "react";
import { Box, Container, Typography, Tabs, Tab, CircularProgress, List, ListItem, Divider, ListItemAvatar, Avatar, ListItemText, Fab, ListItemSecondaryAction, IconButton, createMuiTheme, Tooltip } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import EditarUsuario from "./EditarUsuario/EditarUsuario";
import EliminarUsuario from "./EliminarUsuario/EliminarUsuario";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { cargarUsuarios } from "../../store/actions/usuarios";
import { withSnackbar } from "notistack";
import { setUsuarioAEliminar } from "../../store/actions/eliminarUsuario";
import Notifier from "../Notifier/Notifier";

class Usuarios extends Component {
    state = {
        pestanaActual: 0,
        agregarUsuario: false,
        eliminarUsuario: false,
    }

    componentDidMount = () => {
        this.props.cargarUsuarios();
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

    deleteUserHandler = (id, nombre) => {
        this.setState({eliminarUsuario: true});
        this.props.setUsuarioAEliminar(id, nombre);
    }

    closeDeleteDialog = () => {
        this.setState({eliminarUsuario: false});
    }

    userSelectedHandler = (id) => {
        this.props.history.push("/usuarios/" + id);
    }

    render() {
        let inspectores = this.props.usuarios.filter(usuario => {
            return usuario.rol === "Inspector" ? true : false;
        }).map(inspector => (
            <Fragment>
                <ListItem key={inspector.id} button={true} onClick={() => this.userSelectedHandler(inspector.id)}>
                    <ListItemAvatar>
                        <Avatar alt={"Foto de " + inspector.nombre} src={inspector.foto} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={inspector.nombre}
                        secondary={inspector.id}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => this.deleteUserHandler(inspector.id, inspector.nombre)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </Fragment>
        ));

        let supervisores = this.props.usuarios.filter(usuario => {
            return usuario.rol === "Supervisor" ? true : false;
        }).map(supervisor => (
            <Fragment>
                <ListItem key={supervisor.id} button={true} onClick={() => this.userSelectedHandler(supervisor.id)}>
                    <ListItemAvatar>
                        <Avatar alt={"Foto de " + supervisor.nombre} src={supervisor.foto} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={supervisor.nombre}
                        secondary={supervisor.id}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => this.deleteUserHandler(supervisor.id, supervisor.nombre)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </Fragment>
        ));

        let administradores = this.props.usuarios.filter(usuario => {
            return usuario.rol === "Administrador" ? true : false;
        }).map(administrador => (
            <Fragment>
                <ListItem key={administrador.id} button={true} onClick={() => this.userSelectedHandler(administrador.id)}>
                    <ListItemAvatar>
                        <Avatar alt={"Foto de " + administrador.nombre} src={administrador.foto} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={administrador.nombre}
                        secondary={administrador.id}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => this.deleteUserHandler(administrador.id, administrador.nombre)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </Fragment>
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
                        {this.props.cargando ? <CircularProgress /> : 
                            <List>
                                {inspectores.length !== 0 ? inspectores : "Aún no hay inspectores cargados"}
                            </List>
                        }
                    </this.TabPanel>
                    <this.TabPanel value={this.state.pestanaActual} index={1}>
                        {this.props.cargando ? <CircularProgress /> : 
                            <List>
                                {supervisores.length !== 0 ? supervisores : "Aún no hay supervisores cargados"}
                            </List>
                        }
                    </this.TabPanel>
                    <this.TabPanel value={this.state.pestanaActual} index={2}>
                        {this.props.cargando ? <CircularProgress /> : 
                            <List>
                                {administradores.length !== 0 ? inspectores : "Aún no hay administradores cargados"}
                            </List>
                        }
                    </this.TabPanel>
                    <this.TabPanel value={this.state.pestanaActual} index={3}>
                        Coso de multados
                    </this.TabPanel>
                    <Tooltip title="Agregar usuario" placement="left" arrow>
                        <Fab color="primary" onClick={this.addUserHandler} style={{position: "fixed", bottom: theme.spacing(5), right: theme.spacing(5)}}>
                            <Add />
                        </Fab>
                    </Tooltip>
                </Container>
                <EditarUsuario open={this.state.agregarUsuario} onClose={this.addUserHandler} editar={false} />
                <EliminarUsuario open={this.state.eliminarUsuario} onClose={this.closeDeleteDialog} />
                <Notifier />
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
        setUsuarioAEliminar: (id, nombre) => {dispatch(setUsuarioAEliminar(id, nombre))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(withRouter(Usuarios)));