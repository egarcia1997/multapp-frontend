import * as actionTypes from "./actionTypes";
import Axios from "axios";

const crearUsuarioStart = () => {
    return {
        type: actionTypes.CREAR_USUARIO_START,
    }
}

const crearUsuarioConExito = () => {
    return {
        type: actionTypes.CREAR_USUARIO_CON_EXITO,
    }
}

const crearUsuarioConError = (error) => {
    return {
        type: actionTypes.CREAR_USUARIO_CON_ERROR,
        error: error,
    }
}

export const crearUsuario = (usuario, foto) => {
    return dispatch => {
        dispatch(crearUsuarioStart());
        const data = {
            usuario: usuario,
            foto: foto,
        };
        const headers = {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        };
        Axios.post("/addUsuario", data, headers)
            .then(response => {
                dispatch(crearUsuarioConExito());
            }).catch(error => {
                dispatch(crearUsuarioConError(error));
            });
    }
}