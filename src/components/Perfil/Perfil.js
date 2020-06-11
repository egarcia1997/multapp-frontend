import React, { Component } from "react";
import axios from "axios";
import estilos from "./Perfil.module.css";
import * as placeholder from "../../assets/placeholder-vault-boy.png";
import Modal from "../UI/Modal/Modal";

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
                    <button onClick={this.cambiarContrasena}>Cambiar contraseña</button>
                </div>
                <Modal mostrar={this.state.cambiarContrasena} modalClosed={this.cerrarModal}>
                    <label for="contrasenaActual">Contraseña actual</label>
                    <input type="password" id="contrasenaActual" />
                    <label for="nuevaContrasena">Nueva contraseña</label>
                    <input type="password" id="nuevaContrasena" />
                    <label for="reingreseNuevaContrasena">Vuelva a ingresar la nueva contraseña</label>
                    <input type="password" id="reingreseNuevaContrasena" />
                </Modal>
            </div>
        );
    };
}

export default Perfil;