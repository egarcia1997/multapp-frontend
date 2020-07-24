import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { enqueueSnackbar } from "./notifier";

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
                let texto = editar ? "Usuario actualizado exitosamente" : "Usuario creado exitosamente";
                dispatch(enqueueSnackbar({message: texto, options: {variant: "success"}}));
            }).catch(error => {
                dispatch(editarUsuarioConError(error));
                let texto = editar ? "Error al actualizar usuario" : "Error al crear usuario";
                dispatch(enqueueSnackbar({message: texto, options: {variant: "error"}}));
            });
    }
}