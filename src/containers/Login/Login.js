import React, { Component, Fragment } from "react";
import estilos from "./Login.module.css";

import Logo from "../../components/Logo/Logo";
import IniciarSesion from "./IniciarSesion/IniciarSesion";
import RecuperarContrasena from "./RecuperarContrasena/RecuperarContrasena";

class Login extends Component {
    state = {
        mostrarIniciarSesion: true,
        contrasenaIncorrecta: false,
        cuentaBloqueada: false,
    }

    // metodo para hacer el login
    loginHandler = () => {
        // mandar al server usuario y contraseña
        // si es incorrecto hacer visible el div de clase estilos.Error
        // si es correcto hacer un if
        //     si el usuario es un supervisor cargar el componente LayoutSupervisor
        //     si el usuario es un administrador cargar el componente LayoutAdministrador
    }

    // metodo para mostrar el cuadro de recuperar contraseña
    olvidarContrasenaHandler = () => {
        this.setState({mostrarIniciarSesion: false});
    }

    // metodo para recuperar la contraseña
    recuperarContrasenaHandler = () => {
        // aca va el codigo para mandar el mail
    }

    // metood para volver a mostrar el cuadro de iniciar sesión
    cancelarOlvidoHandler = () => {
        this.setState({mostrarIniciarSesion: true});
    }

    render() {
        let componenteParaMostrar = (
            <IniciarSesion
                iniciar={this.loginHandler}
                olvidar={this.olvidarContrasenaHandler}
            />
        );
        if (!this.state.mostrarIniciarSesion) {
            componenteParaMostrar = (
                <RecuperarContrasena
                    recuperar={this.recuperarContrasenaHandler}
                    cancelar={this.cancelarOlvidoHandler}
                />
            );
        }

        let errorParaMostrar = null;
        if (this.state.contrasenaIncorrecta) {
            errorParaMostrar = (
                <div className={estilos.Error}>
                    El correo electrónico o la contraseña son incorrectos
                </div>
            );
        }
        if (this.state.cuentaBloqueada) {
            errorParaMostrar = (
                <div className={estilos.Error}>
                    Ha ingresado una contraseña incorrecta 3 veces seguidas
                </div>
            );
        }

        return (
            <Fragment>
                <div className={estilos.Background}></div>
                <div className={estilos.Controles}>
                    <Logo width={90} height={90} />
                    <h1>MultApp</h1>
                    {errorParaMostrar}
                    {componenteParaMostrar}
                </div>
                <div className={estilos.Footer}>
                    © 2020 El grupo de Acosta, Cardozo, García, Ibáñez y Mansilla. Todos los derechos reservados.
                </div>
            </Fragment>
        );
    }
}

export default Login;