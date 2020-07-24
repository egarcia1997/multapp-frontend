import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { enqueueSnackbar } from "./notifier";

const cargarMultasConExito = (multas) => {
    return {
        type: actionTypes.CARGAR_MULTAS_CON_EXITO,
        multas: multas,
    }
}

const cargarMultasConError = (error) => {
    return {
        type: actionTypes.CARGAR_MULTAS_CON_ERROR,
        error: error,
    }
}

export const cargarMultas = () => {
    const headers = {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };
    return dispatch => {
        Axios.get("/getMultas", headers)
            .then(response => {
                console.log(response);
                dispatch(cargarMultasConExito(response.data));
            }).catch(error => {
                console.log(error);
                dispatch(cargarMultasConError(error));
                dispatch(enqueueSnackbar({message: "Error al cargar multas. Intente nuevamente", options: {variant: "error"}}));
            });
    }
}