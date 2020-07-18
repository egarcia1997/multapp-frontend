import * as actionTypes from "./actionTypes";
import Axios from "axios";

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
            });
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

// esta es la accion que se va a usar en el componente AgregarUsuario
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