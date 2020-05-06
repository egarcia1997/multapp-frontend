import React from "react";
import "./MultaResumida.css";

const multaResumida = (props) => {
    var nombreDeLaClase; // esto es para definir el estilo de una multa segun su estado
    switch (props.estado) { // esto define el estilo de una multa segun su estado
        case "No resuelta":
            nombreDeLaClase = "MultaResumidaNoResuelta";
            break;
        case "Aceptada":
            nombreDeLaClase = "MultaResumidaAceptada";
            break;
        case "Rechazada":
            nombreDeLaClase = "MultaResumidaRechazada";
            break;
        default:
            console.log("El estado de la multa " + props.id + " está mal cargado: " + props.estado);
    }
    return (
        <div className={"MultaResumida " + nombreDeLaClase} onClick={props.click}>
            <div className="contenidoDeLaMultaResumida">
                <p>{props.id}</p>
                <p><b>Nombre del conductor: </b>{props.nombreConductor}</p>
                <p><b>DNI del conductor: </b>{props.dniConductor}</p>
                <p><b>Fecha: </b>{props.fecha}</p>
                <p><b>Extracto: </b>{props.extracto}</p>
            </div>
            <div className="estadoDeLaMultaResumida">{props.estado}</div>
        </div>
    );
}

export default multaResumida;