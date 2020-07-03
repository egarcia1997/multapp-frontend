import * as actionTypes from "../actions/actionTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_MULTA_CON_EXITO:
            return {};
        case actionTypes.CARGAR_MULTA_CON_ERROR:
            return {};
        case actionTypes.CAMBIAR_ESTADO_CON_EXITO:
            return {};
        case actionTypes.CAMBIAR_ESTADO_CON_ERROR:
            return {};
        default:
            return state;
    }
}

export default reducer;