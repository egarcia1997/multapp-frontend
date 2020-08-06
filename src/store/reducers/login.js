import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cargando: false,
    error: false,
    textoDeError: "",
    idToken: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                cargando: true,
            }
        case actionTypes.LOGIN_CON_EXITO:
            return {
                ...state,
                cargando: false,
                error: false,
                textoDeError: "",
                idToken: action.idToken,
            }
        case actionTypes.LOGIN_CON_ERROR:
            return {
                ...state,
                cargando: false,
                error: true,
                textoDeError: action.error,
            }
        case actionTypes.RECUPERAR_CONTRASENA_CON_EXITO: {
            return {
                ...state,
                cargando: false,
                error: false,
                textoDeError: "Verifique su correo electrónico (bandeja de entrada y correo no deseado). Allí le informamos los pasos a seguir.",
            }
        }
        default:
            return state;
    }
}

export default reducer;