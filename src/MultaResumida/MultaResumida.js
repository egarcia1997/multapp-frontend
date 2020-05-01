import React, {Component} from "react";
import "./MultaResumida.css";

class MultaResumida extends Component {
    state = {
        id: null,
        nombreInfractor: null,
        dniInfractor: null,
        fecha: null,
        extracto: null,
        estado: null,
    }

    render() {
        var nombreDeLaClase;
        switch (this.state.estado) {
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
                <p>asd</p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        );
    }
}

export default MultaResumida;