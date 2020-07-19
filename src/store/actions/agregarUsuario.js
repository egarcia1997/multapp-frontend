import * as actionTypes from "./actionTypes";
import Axios from "axios";

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

export const crearUsuario = (usuario) => {
    return dispatch => {
        Axios.post("/addUsuario", usuario)
            .then(response => {
                dispatch(crearUsuarioConExito());
            }).catch(error => {
                dispatch(crearUsuarioConError(error));
            });
    }
}