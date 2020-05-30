import React from "react";
import estilos from "./RecuperarContrasena.module.css";

const RecuperarContrasena = (props) => {
    return (
        <div className={estilos.RecuperarContrasena}>
            <p>Si ha olvidado su contraseña, ingrese su correo electrónico y le enviaremos una nueva</p>
            <input type="text" id="emailParaRecuperar" />
            <button onClick={props.recuperar}>Recuperar contraseña</button>
            <button className="BotonCancelar" onClick={props.cancelar}>Cancelar</button>
        </div>
    );
}

export default RecuperarContrasena;