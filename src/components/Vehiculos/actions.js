import * as actionTypes from "../../share/actionTypes";
import Axios from "axios";
import { enqueueSnackbar } from "../Notifier/actions";
import { traducirError } from "../../share/traducirError"

const cargarVehiculosConExito = vehiculos => {
    return {
        type: actionTypes.CARGAR_VEHICULOS_CON_EXITO,
        vehiculos: vehiculos,
    }
}

const cargarVehiculosConError = error => {
    return {
        type: actionTypes.CARGAR_VEHICULOS_CON_ERROR,
        error: error,
    }
}

export const cargarVehiculos = () => {
    return dispatch => {
        Axios.get("/getVehiculos")
            .then(response => {
              console.log(response);
                dispatch(cargarVehiculosConExito(response.data));
            }).catch(error => {
                dispatch(cargarVehiculosConError(error));
                dispatch(enqueueSnackbar({message: traducirError(error.response.data.message), options: {variant: "error"}}));
            });
    }
}