import React from "react";
import estilos from "./RecuperarContrasena.module.css";

const RecuperarContrasena = (props) => {
    return (
        <div>
            <p>Si ha olvidado su contraseña, ingrese su correo electrónico y le enviaremos una nueva</p>
            <input type="text" id="emailParaRecuperar" />
            <button className={estilos.Button, estilos.BotonRecuperar}>Recuperar contraseña</button>
            <button className={estilos.Button, estilos.BotonCancelar}>Cancelar</button>
        </div>
    );
}

export default RecuperarContrasena;