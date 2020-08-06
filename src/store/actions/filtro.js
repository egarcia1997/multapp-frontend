import * as actionTypes from "./actionTypes";

export const abrirDialogFiltro = () => {
    return {
        type: actionTypes.ABRIR_DIALOG_FILTRO,
    }
}

export const cerrarDialogFiltro = () => {
    return {
        type: actionTypes.CERRAR_DIALOG_FILTRO,
    }
}

export const setFiltros = filtros => {
    return {
        type: actionTypes.SET_FILTROS,
        filtros: filtros,
    }
}

export const clearFiltros = () => {
    return {
        type: actionTypes.CLEAR_FILTROS,
    }
}