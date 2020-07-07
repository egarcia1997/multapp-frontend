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
    const params = {
        params: {
            id: id,
        },
    };
    return dispatch => {
        Axios.get("/getMulta", params)
            .then(response => {
                dispatch(cargarMultaConExito(response.data));
            }).catch(error => {
                dispatch(cargarMultaConError(error));
            });
    }
}

const cambiarEstadoConExito = (id) => {
    return {
        type: actionTypes.CAMBIAR_ESTADO_CON_EXITO,
        id: id,
    }
}

const cambiarEstadoConError = (error) => {
    return {
        type: actionTypes.CAMBIAR_ESTADO_CON_ERROR,
        error: error,
    }
}

export const cambiarEstado = (id, estado, razon) => {
    const data = {
        id: id,
        estado: estado,
        razon: razon,
    };
    return dispatch => {
        Axios.patch("/actualizarEstado", data)
            .then(response => {
                console.log(response);
                dispatch(cambiarEstadoConExito(id));
            }).catch(error => {
                console.log(error);
                dispatch(cambiarEstadoConError(error));
            });
    }
}