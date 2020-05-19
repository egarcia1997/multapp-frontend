import React from "react";
import estilos from "./BarraSuperior.module.css";
import * as applogo from "../../assets/multapp-logo.png";

const BarraSuperior = (props) => {
    return (
        <div className={estilos.BarraSuperior}>
            {/* los elementos en el div de clase derecha se van a mostrar al reves de como estan aca */}
            {/* porque en el css tiene el estilo flex-direction: row-reverse */}
            <div className={estilos.Izquierda}>
                <img src={applogo} alt="Logo de MultApp" width="48" height="48" />
                <span>MultApp</span>
            </div>
            <div className={estilos.Derecha}>
                <img src={props.imagen} alt="Su foto de perfil" width="48" height="48" />
                <span>{props.nombre}</span>
            </div>
        </div>
    );
}

export default BarraSuperior;