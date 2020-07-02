import * as actionTypes from "./actionTypes";
import Axios from "axios";

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
    return dispatch => {
        Axios.get("/multas")
            .then(response => {
                // ACA MANIPULAR LA RESPUESTA PARA METER EL ID DENTRO DE LA MULTA
                dispatch(cargarMultasConExito(response.data));
            }).catch(error => {
                dispatch(cargarMultasConError(error));
            });
    }
}