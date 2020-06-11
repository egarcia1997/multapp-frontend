import React from "react";
import estilos from "./Backdrop.module.css";

const Backdrop = (props) => {
    let contenido = (props.mostrar ? (<div className={estilos.Backdrop} onClick={props.clicked}></div>) : null);
    return contenido;
}

export default Backdrop;