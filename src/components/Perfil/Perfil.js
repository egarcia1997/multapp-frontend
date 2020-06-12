import React, { Component } from "react";
import axios from "axios";
import estilos from "./Perfil.module.css";
import * as placeholder from "../../assets/placeholder-vault-boy.png";
import {Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText, Avatar, List, ListItemIcon, ListItem, ListItemText} from "@material-ui/core";
import {Email, Lock, Home, Phone, Contacts} from "@material-ui/icons";

class Perfil extends Component {
    state = {
        cambiarContrasena: false,
    }

    cambiarContrasena = () => {
        this.setState({cambiarContrasena: true});
    }

    cerrarDialog = () => {
        this.setState({cambiarContrasena: false});
    }

    render() {
        return (
            <div className={estilos.Perfil}>
                <div className={estilos.Cabecera}>
                    <Avatar style={{width: "200px", height: "200px"}} src={placeholder} alt="Juan Pérez" />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1>Juan Pérez</h1>
                        <h3>Supervisor</h3>
                    </div>
                </div>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Contacts />
                        </ListItemIcon>
                        <ListItemText primary="DNI" secondary="12.345.678" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Dirección" secondary="Calle Falsa 123" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Phone />
                        </ListItemIcon>
                        <ListItemText primary="Teléfono" secondary="362 4123456" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText primary="Correo electrónico" secondary="juancitokpo_84@capitanichmail.com" />
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
                            <Button onClick={this.cerrarDialog} color="secondary">
                                Cancelar
                            </Button>
                            <Button onClick={this.cerrarDialog} color="primary">
                                Aceptar
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        );
    };
}

export default Perfil;