import * as actionTypes from "../../share/actionTypes";

const initialState = {
    vehiculos: [],
    cargando: true,
    cargandoEditar: false,
    error: false,
    textoDeError: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_VEHICULOS_CON_EXITO:
            return {
                ...state,
                vehiculos: action.vehiculos,
                cargando: false,
                error: false,
                textoDeError: "",
            };
        case actionTypes.CARGAR_VEHICULOS_CON_ERROR:
            return {
                ...state,
                cargando: false,
                error: true,
                textoDeError: action.error,
            };
        case actionTypes.EDITAR_VEHICULOS_START:
            return {
                ...state,
                cargandoEditar: true
            };
        case actionTypes.EDITAR_VEHICULOS_CON_EXITO:
            return {
                ...state,
                cargandoEditar: false,
                error: false,
                textoDeError: "",
            };
        case actionTypes.EDITAR_VEHICULOS_CON_ERROR:
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