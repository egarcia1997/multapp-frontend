import * as actionTypes from "../actions/actionTypes";

const initialState = {
    vehiculos: [],
    cargando: true,
    cargandoModelo: false,
    error: false,
    textoDeError: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGAR_VEHICULOS_CON_EXITO:
            return {
                ...state,
                usuarios: action.usuarios,
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
        case actionTypes.CREAR_MARCA_CON_EXITO:
          return {
              ...state,
              cargandoModelo: false,
              error: false,
              textoDeError: "",
          };
        case actionTypes.CREAR_MARCA_CON_ERROR:
          return {
              ...state,
              cargandoModelo: false,
              error: true,
              textoDeError: action.error,
          };
        case actionTypes.CREAR_MODELO_CON_EXITO:
        return {
            ...state,
            cargandoModelo: false,
            error: false,
            textoDeError: "",
        };
        case actionTypes.CREAR_MODELO_CON_ERROR:
        return {
            ...state,
            cargandoModelo: false,
            error: true,
            textoDeError: action.error,
        };
        default:
            return state;
    }
}

export default reducer;