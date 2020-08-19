import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { enqueueSnackbar } from "./notifier";
import { traducirError } from "../../share/traducirError"

const cargarUsuariosConExito = (usuarios) => {
    return {
        type: actionTypes.CARGAR_USUARIOS_CON_EXITO,
        usuarios: usuarios,
    }
}

const cargarUsuariosConError = (error) => {
    return {
        type: actionTypes.CARGAR_USUARIOS_CON_ERROR,
        error: error,
    }
}

// esta es la accion que se va a usar en el componente Usuarios
export const cargarUsuarios = () => {
    return dispatch => {
        Axios.get("/getUsuarios")
            .then(response => {
                dispatch(cargarUsuariosConExito(response.data));
            }).catch(error => {
                dispatch(cargarUsuariosConError(error));
                dispatch(enqueueSnackbar({message: traducirError(error.response.data.message), options: {variant: "error"}}));
            });
    }
}