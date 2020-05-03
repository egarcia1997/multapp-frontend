import React from "react";
import "./BarraSuperior.css";

const barraSuperior = (props) => {
    return (
        <div className="BarraSuperior">
            <div>
                <table>
                    <tr><td><b>{props.nombre}</b></td></tr>
                    <tr><td>Cerrar sesión</td></tr>
                </table>
            </div>
            <img src={props.imagen} alt="Su foto de perfil" />
        </div>
    );
}

export default barraSuperior;