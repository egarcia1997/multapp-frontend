import * as actionTypes from "../actions/actionTypes";

const initialState = {
    multa: null,
    cargando: true,
    errorAlCargar: false,
    textoDeErrorAlCargar: false,
    estadoCambiado: false,
    errorAlCambiarDeEstado: false,
    textoDeErrorAlCambiarDeEstado: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_MULTA_CON_EXITO:
            return {
                ...state,
                multa: action.multa,
                cargando: false,
                errorAlCargar: false,
            };
        case actionTypes.CARGAR_MULTA_CON_ERROR:
            return {
                ...state,
                cargando: false,
                errorAlCargar: true,
                textoDeErrorAlCargar: action.error,
            };
        case actionTypes.CAMBIAR_ESTADO_CON_EXITO:
            return {
                ...state,
                estadoCambiado: true,
                errorAlCambiarDeEstado: false,
            };
        case actionTypes.CAMBIAR_ESTADO_CON_ERROR:
            return {
                ...state,
                estadoCambiado: false,
                errorAlCambiarDeEstado: true,
                textoDeErrorAlCambiarDeEstado: action.error,
            };
        default:
            return state;
    }
}

export default reducer;