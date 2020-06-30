import React, { Component, Fragment } from "react";
import axios from "axios";
import { Box, Container, Typography, Tabs, Tab, CircularProgress, List, ListItem, Divider, ListItemAvatar, Avatar, ListItemText, Fab, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import AgregarUsuario from "./AgregarUsuario/AgregarUsuario";
import EliminarUsuario from "./EliminarUsuario/EliminarUsuario";
import { withRouter } from "react-router";

class Usuarios extends Component {
    state = {
        pestanaActual: 0,
        cargando: true,
        huboError: false,
        textoDeError: "",
        agregarUsuario: false,
        eliminarUsuario: false,
    }

    componentDidMount = () => {
        // axios.get("/")
        //     .then(response => {

        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({
        //             cargando: false,
        //             huboError: true,
        //             textoDeError: error,
        //         })
        //     })
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
        // hacer esto mismo para supervisores, administradores y multados
        // let inspectores = this.state.inspectores.map(usuario => (
        //     <ListItem key={usuario.id} button={true} onClick={() => this.userSelectedHandler(usuario.id)}>
        //         <ListItemAvatar>
        //             <Avatar alt={"Foto de " + usuario.nombre} src={usuario.foto} />
        //         </ListItemAvatar>
        //         <ListItemText
        //             primary={usuario.apellido + " " + usuario.nombre}
        //             secondary={usuario.id}
        //         />
        //         <ListItemSecondaryAction>
        //             <IconButton onClick={this.deleteUserHandler}>
        //                 <Delete />
        //             </IconButton>
        //         </ListItemSecondaryAction>
        //     </ListItem>
        // ));

        return (
            <Fragment>
                <Container maxWidth="lg">
                    <Tabs value={this.state.pestanaActual} centered={true} onChange={this.tabChangeHandler} indicatorColor="primary" textColor="primary">
                        <Tab label="Inspectores" />
                        <Tab label="Supervisores" />
                        <Tab label="Administradores" />
                        <Tab label="Multados" />
                    </Tabs>
                    <this.TabPanel value={this.state.pestanaActual} index={0}>
                        {this.state.cargando ?
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
                    <Fab color="primary" onClick={this.addUserHandler}>
                        <Add />
                    </Fab>
                </Container>
                <AgregarUsuario open={this.state.agregarUsuario} onClose={this.addUserHandler} />
                <EliminarUsuario open={this.state.eliminarUsuario} onClose={this.deleteUserHandler} />
            </Fragment>
        );
    }
}

export default withRouter(Usuarios);