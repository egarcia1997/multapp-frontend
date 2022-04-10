import * as actionTypes from "../../share/actionTypes";
import Axios from "axios";
import { enqueueSnackbar } from "../Notifier/actions";

const cargarPerfilConExito = (datos) => {
    return {
        type: actionTypes.CARGAR_PERFIL_CON_EXITO,
        id: datos.id,
        datos: datos.datos,
        foto: datos.foto,
    }
}

const cargarPerfilConError = (error) => {
    return {
        type: actionTypes.CARGAR_PERFIL_CON_ERROR,
        error: error,
    }
}

export const cargarPerfil = () => {
    return (dispatch, getState) => {
        const data = {
            params: {
                uid: getState().login.uid,
            }
        };
        Axios.get("/getPerfil", data)
            .then(response => {
                dispatch(cargarPerfilConExito(response.data));
            }).catch(error => {
                dispatch(cargarPerfilConError(error));
                dispatch(enqueueSnackbar({message: "No se pudieron obtener sus datos personales", options: {variant: "error"}}));
            });
    }
}