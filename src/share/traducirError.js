// funcion a la que se le mete un error que da firebase y devuelve algo entendible
export const traducirError = (error) => {
    switch (error) {
        // errores de login
        case "INVALID_PASSWORD":
            return "La contraseña es incorrecta";
        case "EMAIL_NOT_FOUND":
            return "El correo electrónico no está cargado en nuestros sistemas";
        case "INVALID_EMAIL":
            return "El correo electrónico ingresado no es válido";
        case "USER_DISABLED":
            return "Su cuenta fue bloqueada. Contacte con un administrador";
        // errores de authentication
        case "auth/email-already-exists":
            return "Ya existe un usuario con el correo electrónico ingresado";
        case "auth/phone-number-already-exists":
            return "Ya existe un usuario con el número de teléfono ingresado";
        default:
            return "Ocurrió un error. Intente nuevamente";
    }
}