import * as actionTypes from "../actions/actionTypes";

const initialState = {
    mostrarDialog: false,
    cargando: false,
    exito: false,
    error: false,
    textoDeError: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ABRIR_DIALOG_RESOLVER:
            return {
                ...state,
                mostrarDialog: true,
            };
        case actionTypes.CERRAR_DIALOG_RESOLVER:
            return {
                ...state,
                mostrarDialog: false,
            };
        case actionTypes.RESOLVER_MULTA_START:
            return {
                ...state,
                cargando: true,
            };
        case actionTypes.RESOLVER_MULTA_CON_EXITO:
            return {
                ...state,
                mostrarDialog: false,
                cargando: false,
                exito: true,
                error: false,
                textoDeError: "",
            };
        case actionTypes.RESOLVER_MULTA_CON_ERROR:
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