import * as actionTypes from "../actions/actionTypes";

const initialState = {
    usuarios: [],
    cargando: true,
    error: false,
    textoDeError: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_USUARIOS_CON_EXITO:
            return {
                ...state,
                usuarios: action.usuarios,
                cargando: false,
                error: false,
                textoDeError: "",
            };
        case actionTypes.CARGAR_USUARIOS_CON_ERROR:
            return {
                ...state,
                cargando: false,
                error: true,
                textoDeError: action.error,
            };
        default:
            return state;
    }
}

export default reducer;