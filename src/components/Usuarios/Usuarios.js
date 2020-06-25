import React, { Component, Fragment } from "react";
import axios from "axios";
import { Box, Container, Typography, Tabs, Tab, CircularProgress, TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, List, ListItem, Divider, ListItemAvatar, Avatar, ListItemText, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import AgregarUsuario from "./AgregarUsuario/AgregarUsuario";

class Usuarios extends Component {
    state = {
        pestanaActual: 0,
        cargando: true,
        huboError: false,
        textoDeError: "",
        agregarUsuario: false,
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

    render() {
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
                            <ListItem button={true}>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText primary="Juan Pérez" secondary="64ghf8shj23" />
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
            </Fragment>
        );
    }
}

export default Usuarios;