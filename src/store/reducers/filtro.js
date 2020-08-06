import * as actionTypes from "../actions/actionTypes";

const initialState = {
    mostrarDialog: false,
    noResueltas: true,
    aceptadas: true,
    rechazadas: true,
    desde: "2020-01-01",
    hasta: new Date().toISOString().slice(0, 10),
    dni: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ABRIR_DIALOG_FILTRO:
            return {
                ...state,
                mostrarDialog: true,
            };
        case actionTypes.CERRAR_DIALOG_FILTRO:
            return {
                ...state,
                mostrarDialog: false,
            }
        case actionTypes.SET_FILTROS:
            return {
                ...action.filtros,
                mostrarDialog: false,
            };
        case actionTypes.CLEAR_FILTROS:
            return initialState;
        default:
            return state;
    }
}

export default reducer;