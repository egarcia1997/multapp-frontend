import * as actionTypes from "./actionTypes";
import Axios from "axios";

const cargarMultaConExito = (multa) => {
    return {
        type: actionTypes.CARGAR_MULTA_CON_EXITO,
        multa: multa,
    }
}

const cargarMultaConError = (error) => {
    return {
        type: actionTypes.CARGAR_MULTA_CON_ERROR,
        error: error,
    }
}

export const cargarMulta = (id) => {
    return dispatch => {
        Axios.get("/multas/" + id)
            .then(response => {
                // ACA MANIPULAR LA RESPUESTA PARA METER EL ID DENTRO DE LA MULTA
                dispatch(cargarMultaConExito(response.data));
            }).catch(error => {
                dispatch(cargarMultaConError(error));
            });
    }
}

const cambiarEstadoConExito = (id) => {
    return {
        type: actionTypes.CARGAR_MULTA_CON_EXITO,
        id: id,
    }
}

const cambiarEstadoConError = (error) => {
    return {
        type: actionTypes.CARGAR_MULTA_CON_ERROR,
        error: error,
    }
}

export const cambiarEstado = (id, estado, razon) => {
    const data = {
        estado: estado,
        razon: razon,
    }
    return dispatch => {
        Axios.patch("/multas/" + id, data)
            .then(response => {
                // ACA MANIPULAR LA RESPUESTA PARA METER EL ID DENTRO DE LA MULTA
                dispatch(cambiarEstadoConExito(id));
            }).catch(error => {
                dispatch(cambiarEstadoConError(error));
            });
    }
}