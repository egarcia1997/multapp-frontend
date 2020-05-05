import React from "react";
import "./BarraSuperior.css";

const barraSuperior = (props) => {
    return (
        <div className="BarraSuperior">
            {/* los elementos se van a mostrar al reves de como estan aca */}
            {/* porque en el css tiene el estilo flex-direction: row-reverse */}
            <img src={props.imagen} alt="Su foto de perfil" />
            <div>
                <table>
                    <tr><td><b>{props.nombre}</b></td></tr>
                    <tr><td>Cerrar sesión</td></tr>
                </table>
            </div>
        </div>
    );
}

export default barraSuperior;