import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { enqueueSnackbar } from "./notifier";

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
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        params: {
            id: id,
        },
    };
    return dispatch => {
        Axios.get("/getMulta", params)
            .then(response => {
                console.log(response);
                dispatch(cargarMultaConExito(response.data));
            }).catch(error => {
                console.log(error);
                dispatch(cargarMultaConError(error));
                dispatch(enqueueSnackbar({message: "Error al cargar multa. Intente nuevamente", options: {variant: "error"}}));
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
    const params = {
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        params: {
            id: id,
            estado: estado,
            razon: razon,
        },
    };
    return dispatch => {
        Axios.patch("/actualizarEstado", params)
            .then(response => {
                console.log(response);
                dispatch(cambiarEstadoConExito(id));
                dispatch(enqueueSnackbar({message: "Estado cambiado exitosamente", options: {variant: "success"}}));
            }).catch(error => {
                console.log(error);
                dispatch(cambiarEstadoConError(error));
                dispatch(enqueueSnackbar({message: "Error al cambiar de estado. Intente nuevamente", options: {variant: "error"}}));
            });
    }
}