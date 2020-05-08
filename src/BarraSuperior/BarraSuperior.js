import React from "react";
import "./BarraSuperior.css";

const barraSuperior = (props) => {
    return (
        <div className="BarraSuperior">
            {/* los elementos en el div derecha se van a mostrar al reves de como estan aca */}
            {/* porque en el css tiene el estilo flex-direction: row-reverse */}
            <div className="izquierda">
                <img src="public/multapp-logo.png" alt="Logo de MultApp" />
            </div>
            <div className="derecha">
                <img src={props.imagen} alt="Su foto de perfil" />
                <table>
                    <tbody>
                        <tr><td><b>{props.nombre}</b></td></tr>
                        <tr><td>Cerrar sesión</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default barraSuperior;