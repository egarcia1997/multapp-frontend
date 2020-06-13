import React, { Component } from "react";
import axios from "axios";
import estilos from "./Perfil.module.css";
import * as placeholder from "../../assets/placeholder-vault-boy.png";
import {Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText, Avatar, List, ListItemIcon, ListItem, ListItemText, CircularProgress, Container} from "@material-ui/core";
import {Email, Lock, Home, Phone, Contacts} from "@material-ui/icons";

class Perfil extends Component {
    state = {
        nombre: "Juan Pérez",
        rol: "Supervisor",
        imagen: placeholder,
        dni: "12.345.678",
        direccion: "Calle Falsa 123",
        telefono: "362 4123456",
        email: "juancitokpo_84@capitanichmail.com",
        cargando: false,
        huboError: false,
        cambiarContrasena: false,
    }

    componentDidMount = () => {
        axios.get("/supervisores") // poner para que busque los datos solo del supervisor actual
            .then(response => { // si salio tood bien
                console.log(response); // muestra la respuesta por consola
                this.setState({ // carga los datos obtenidos en el state
                    cargando: false,
                    nombre: response.data.nombre,
                    rol: response.data.rol,
                    imagen: response.data.imagen,
                    dni: response.data.dni,
                    direccion: response.data.direccion,
                    telefono: response.data.telefono,
                    email: response.data.email,
                });
            }).catch(error => { // si salio todo mal
                console.log(error); // muestra por consola el error
                this.setState({ // pone en el state que no se esta cargando y que hubo error
                    cargando: false,
                    huboError: true,
                });
            });
    }

    // metodo que hace que se abra el Dialog de cambiar contraseña
    cambiarContrasena = () => {
        this.setState({cambiarContrasena: true});
    }

    // metodo para cerrar el Dialog de cambiar contraseña
    cerrarDialog = () => {
        this.setState({cambiarContrasena: false});
    }

    render() {
        let progress = this.state.cargando ? <CircularProgress /> : null;
        return (
            <Container>
                <div className={estilos.Cabecera}>
                    <Avatar style={{width: "200px", height: "200px"}} src={this.state.imagen} alt={this.state.nombre} />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1>{this.state.nombre}</h1>
                        <h3>{this.state.rol}</h3>
                    </div>
                </div>
                {progress}
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Contacts />
                        </ListItemIcon>
                        <ListItemText primary="DNI" secondary={this.state.dni} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Dirección" secondary={this.state.direccion} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Phone />
                        </ListItemIcon>
                        <ListItemText primary="Teléfono" secondary={this.state.telefono} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText primary="Correo electrónico" secondary={this.state.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Lock />
                        </ListItemIcon>
                        <ListItemText primary="Contraseña" secondary="········" />
                    </ListItem>
                </List>
                <Button variant="contained" color="primary" onClick={this.cambiarContrasena}>Cambiar contraseña</Button>
                <Dialog open={this.state.cambiarContrasena} onClose={this.cerrarDialog}>
                    <DialogTitle>Cambiar contraseña</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            No vayas a meter cualquier cosa insegura como contraseña
                        </DialogContentText>
                        <TextField autoFocus={true} type="password" label="Contraseña actual" fullWidth={true} />
                        <TextField type="password" label="Nueva contraseña" fullWidth={true} />
                        <TextField type="password" label="Repita la nueva contraseña" fullWidth={true} />
                        <DialogActions>
                            <Button onClick={this.cerrarDialog} color="default">
                                Cancelar
                            </Button>
                            <Button onClick={this.cerrarDialog} color="primary">
                                Aceptar
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </Container>
        );
    };
}

export default Perfil;