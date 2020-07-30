import * as actionTypes from "../actions/actionTypes";

const initialState = {
    id: "",
    datos: null,
    foto: "",
    error: false,
    textoDeError: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_PERFIL_CON_EXITO:
            return {
                ...state,
                id: action.id,
                datos: action.datos,
                foto: action.foto,
                error: false,
                textoDeError: "",
            };
        case actionTypes.CARGAR_PERFIL_CON_ERROR:
            return {
                ...state,
                id: "",
                datos: null,
                foto: "",
                error: true,
                textoDeError: action.error,
            };
        default:
            return state;
    }
}

export default reducer;