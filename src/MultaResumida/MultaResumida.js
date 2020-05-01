import React from "react";
import "./MultaResumida.css";

const multaResumida = (props) => {
    var nombreDeLaClase;
    switch (props.estado) {
        case "No resuelta":
            nombreDeLaClase = "MultaResumidaNoResuelta";
            break;
        case "Aceptada":
            nombreDeLaClase = "MultaResumidaAceptada";
            break;
        case "Rechazada":
            nombreDeLaClase = "MultaResumidaRechazada";
            break;
    }
    return (
        <div className={"MultaResumida " + nombreDeLaClase}>
            <div className="contenidoDeLaMultaResumida">
                <p>{props.id}</p>
                <p><b>Nombre del conductor: </b>{props.nombreConductor}</p>
                <p><b>DNI del conductor: </b>{props.dniConductor}</p>
                <p><b>Fecha: </b>{props.fecha}</p>
                <p><b>Extracto: </b>{props.extracto}</p>
            </div>
            <div className="estadoDeLaMultaResumida">{props.estado}ghk</div>
        </div>
    );
}

export default multaResumida;