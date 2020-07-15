// funcion que vacia el localStorage y recarga la pagina (para borrar el estado de redux)
export const cerrarSesion = () => {
    localStorage.clear();
    window.location.reload();
}