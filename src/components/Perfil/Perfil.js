import React, { Component } from "react";
import axios from "axios";
import estilos from "./Perfil.module.css";
import * as placeholder from "../../assets/placeholder-vault-boy.png";
import {Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText} from "@material-ui/core";

class Perfil extends Component {
    state = {
        cambiarContrasena: false,
    }

    cambiarContrasena = () => {
        this.setState({cambiarContrasena: true});
    }

    cerrarModal = () => {
        this.setState({cambiarContrasena: false});
    }

    render() {
        return (
            <div className={estilos.Perfil}>
                <div className={estilos.Cabecera}>
                    <img className={estilos.Foto} src={placeholder} alt="Su foto de perfil" width="200" height="200" />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1>Juan Pérez</h1>
                        <h3>Supervisor</h3>
                    </div>
                </div>
                <div>
                    <ul className={estilos.DatosPersonales}>
                        <li>
                            <span>DNI</span>
                            <span>12.345.678</span>
                        </li>
                        <li>
                            <span>Dirección</span>
                            <span>Calle Falsa 123</span>
                        </li>
                        <li>
                            <span>Teléfono</span>
                            <span>362 4123456</span>
                        </li>
                        <li>
                            <span>Correo electrónico</span>
                            <span>juancito_kpo84@capitanichmail.com</span>
                        </li>
                        <li>
                            <span>Contraseña</span>
                            <span>·········</span>
                        </li>
                    </ul>
                    <Button variant="contained" color="primary" onClick={this.cambiarContrasena}>Cambiar contraseña</Button>
                </div>
                <Dialog open={this.state.cambiarContrasena} onClose={this.cerrarModal}>
                    <DialogTitle>Cambiar contraseña</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            No vayas a meter cualquier cosa insegura como contraseña
                        </DialogContentText>
                        <TextField autoFocus={true} type="password" label="Contraseña actual" fullWidth={true} />
                        <TextField type="password" label="Nueva contraseña" fullWidth={true} />
                        <TextField type="password" label="Repita la nueva contraseña" fullWidth={true} />
                        <DialogActions>
                            <Button onClick={this.cerrarModal} color="secondary">
                                Cancelar
                            </Button>
                            <Button onClick={this.cerrarModal} color="primary">
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