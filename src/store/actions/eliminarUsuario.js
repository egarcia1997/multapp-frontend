import * as actionTypes from "./actionTypes";
import Axios from "axios";

const eliminarUsuarioStart = () => {
    return {
        type: actionTypes.ELIMINAR_USUARIO_START,
    }
}

const eliminarUsuarioConExito = () => {
    return {
        type: actionTypes.ELIMINAR_USUARIO_CON_EXITO,
    }
}

const eliminarUsuarioConError = (error) => {
    return {
        type: actionTypes.ELIMINAR_USUARIO_CON_ERROR,
        error: error,
    }
}

export const eliminarUsuario = (id) => {
    return dispatch => {
        dispatch(eliminarUsuarioStart());
        const params = {
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            params: {
                id: id,
            },
        };
        Axios.delete("/deleteUsuario", params)
            .then(response => {
                console.log(response);
                dispatch(eliminarUsuarioConExito());
            }).catch(error => {
                console.log(error);
                dispatch(eliminarUsuarioConError(error));
            });
    }
}