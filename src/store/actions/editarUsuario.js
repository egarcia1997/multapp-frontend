import * as actionTypes from "./actionTypes";
import Axios from "axios";

const editarUsuarioStart = () => {
    return {
        type: actionTypes.EDITAR_USUARIO_START,
    }
}

const editarUsuarioConExito = () => {
    return {
        type: actionTypes.EDITAR_USUARIO_CON_EXITO,
    }
}

const editarUsuarioConError = (error) => {
    return {
        type: actionTypes.EDITAR_USUARIO_CON_ERROR,
        error: error,
    }
}

export const editarUsuario = (id, usuario, foto, editar) => {
    return dispatch => {
        dispatch(editarUsuarioStart());
        const data = {
            id: id,
            usuario: usuario,
            foto: foto,
        };
        const headers = {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        };
        // si editar es true, edita el usuario, si es false crea uno nuevo
        let url = editar ? "/editUsuario" : "/addUsuario";
        Axios.post(url, data, headers)
            .then(response => {
                dispatch(editarUsuarioConExito());
            }).catch(error => {
                dispatch(editarUsuarioConError(error));
            });
    }
}