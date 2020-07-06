import * as actionTypes from "./actionTypes";
import Axios from "axios";

const cargarMultasConExito = (multas) => {
    return {
        type: actionTypes.CARGAR_MULTAS_CON_EXITO,
        multas: multas,
    }
}

const cargarMultasConError = (error) => {
    return {
        type: actionTypes.CARGAR_MULTAS_CON_ERROR,
        error: error,
    }
}

export const cargarMultas = () => {
    const headers = {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };
    return dispatch => {
        Axios.get("/getAll", headers)
            .then(response => {
                console.log(response);
                // ESTO ESTARIA PARA HACER EN EL BACKEND
                // NO ACA
                const multasArregladas = Object.keys(response.data).map(id => {
                    return {
                        id: id,
                        nombreConductor: response.data[id].conductor.nombre,
                        dniConductor: response.data[id].conductor.nroDocumento,
                        fecha: response.data[id].ubicacion.fecha,
                        extracto: response.data[id].infraccion.extracto,
                        estado: response.data[id].estado,
                    }
                });
                /////////////////////////////////////////
                dispatch(cargarMultasConExito(multasArregladas));
            }).catch(error => {
                console.log(error);
                dispatch(cargarMultasConError(error));
            });
    }
}