import * as actionTypes from "../actions/actionTypes";

const initialState = {
    multa: null,
    cargando: true,
    error: false,
    textoDeError: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_MULTA_CON_EXITO:
            return {
                ...state,
                multa: action.multa,
                cargando: false,
                error: false,
            };
        case actionTypes.CARGAR_MULTA_CON_ERROR:
            return {
                ...state,
                cargando: false,
                error: true,
                textoDeError: action.error,
            };
        case actionTypes.CAMBIAR_ESTADO_CON_EXITO:
            return {};
        case actionTypes.CAMBIAR_ESTADO_CON_ERROR:
            return {};
        default:
            return state;
    }
}

export default reducer;