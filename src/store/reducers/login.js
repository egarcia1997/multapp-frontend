import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cargando: false,
    error: "",
    idToken: "",
    expirationDate: "",
    localId: "",
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
                expirationDate: action.expirationDate,
                localId: action.localId,
            }
        case actionTypes.LOGIN_CON_ERROR:
            return {
                ...state,
                cargando: false,
                error: action.error,
            }
        default:
            return state;
    }
}

export default reducer;