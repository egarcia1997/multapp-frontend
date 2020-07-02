import * as actionTypes from "../actions/actionTypes";

const initialState = {
    multas: [],
    cargando: true,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_MULTAS_CON_EXITO:
            return {
                ...state,
                multas: action.multas,
                cargando: false,
                error: false,
            };
        case actionTypes.CARGAR_MULTAS_CON_ERROR:
            return {
                ...state,
                cargando: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default reducer;