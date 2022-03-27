import * as actionTypes from "../../share/actionTypes";

const initialState = {
    cargando: false,
    error: false,
    textoDeError: "",
    uid: localStorage.getItem('uid'),
    idToken: localStorage.getItem('idToken'),
    displayName: localStorage.getItem('displayName'),
    email: localStorage.getItem('email'),
    phoneNumber: localStorage.getItem('phoneNumber'),
    photoURL: localStorage.getItem('photoURL')
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
                uid: action.userData.uid,
                idToken: action.userData.idToken,
                displayName: action.userData.displayName,
                email: action.userData.email,
                phoneNumber: action.userData.phoneNumber,
                photoURL: action.userData.photoURL
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