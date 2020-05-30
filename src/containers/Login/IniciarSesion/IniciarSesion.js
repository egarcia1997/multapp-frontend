import React from "react";
import estilos from "./IniciarSesion.module.css";

const IniciarSesion = (props) => {
    return (
        <div className={estilos.IniciarSesion}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="text" id="email" />
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" id="contrasena" />
            <button onClick={props.iniciar}>Iniciar sesión</button>
            <label className={estilos.OlvidarContrasena} onClick={props.olvidar}>¿Olvidó su contraseña?</label>
        </div>
    );
}

export default IniciarSesion;