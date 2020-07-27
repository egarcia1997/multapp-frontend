import * as actionTypes from "../actions/actionTypes";

const initialState = {
    mostrarDialog: false,
    cargando: false,
    exito: false,
    error: false,
    textoDeError: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ABRIR_DIALOG_CAMBIAR_CONTRASENA:
            return {
                ...state,
                mostrarDialog: true,
            };
        case actionTypes.CERRAR_DIALOG_CAMBIAR_CONTRASENA:
            return {
                ...state,
                mostrarDialog: false,
                cargando: false,
                exito: false,
                error: false,
                textoDeError: "",
            };
        case actionTypes.CAMBIAR_CONTRASENA_START:
            return {
                ...state,
                cargando: true,
            };
        case actionTypes.CAMBIAR_CONTRASENA_CON_EXITO:
            return {
                ...state,
                cargando: false,
                exito: true,
                error: false,
                textoDeError: "",
            };
        case actionTypes.CAMBIAR_CONTRASENA_CON_ERROR:
            return {
                ...state,
                cargando: false,
                exito: false,
                error: true,
                textoDeError: action.error,
            };
        default:
            return state;
    }
}

export default reducer;