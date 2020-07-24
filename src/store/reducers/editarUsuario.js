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
        case actionTypes.ABRIR_DIALOG_EDITAR:
            return {
                ...state,
                mostrarDialog: true,
            };
        case actionTypes.CERRAR_DIALOG_EDITAR:
            return {
                ...state,
                mostrarDialog: false,
                cargando: false,
                exito: false,
                error: false,
                textoDeError: "",
            };
        case actionTypes.EDITAR_USUARIO_START:
            return {
                ...state,
                cargando: true,
            };
        case actionTypes.EDITAR_USUARIO_CON_EXITO:
            return {
                ...state,
                cargando: false,
                exito: true,
                error: false,
                textoDeError: "",
            };
        case actionTypes.EDITAR_USUARIO_CON_ERROR:
            return {
                ...state,
                cargando: false,
                exito: false,
                error: false,
                textoDeError: action.error.toString(),
            };
        default:
            return state;
    }
}

export default reducer;