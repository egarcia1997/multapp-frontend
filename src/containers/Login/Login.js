import React, { Component, Fragment } from "react";
import estilos from "./Login.module.css";
import Logo from "../../components/Logo/Logo";

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className={estilos.Background}>
                    <div className={estilos.Controles}>
                        <Logo width={185} height={186} />
                        <h1>MultApp</h1>
                        <label for="email">Correo Electrónico</label>
                        <input type="text" id="email" />
                        <label for="contrasena">Contraseña</label>
                        <input type="password" id="contrasena" />
                        <button>Iniciar sesión</button>
                        <a href="">¿Olvidó su contraseña?</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;