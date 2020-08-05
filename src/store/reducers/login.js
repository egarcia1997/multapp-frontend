import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cargando: false,
    error: "",
    idToken: "",
    contrasenaRecuperada: false,
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
                error: "",
                idToken: action.idToken,
            }
        case actionTypes.LOGIN_CON_ERROR:
            return {
                ...state,
                cargando: false,
                error: action.error,
            }
        case actionTypes.RECUPERAR_CONTRASENA_CON_EXITO: {
            return {
                ...state,
                cargando: false,
                contrasenaRecuperada: true,
            }
        }
        default:
            return state;
    }
}

export default reducer;