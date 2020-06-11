import React from "react";
import { withRouter } from "react-router";
import estilos from "./DropdownMenu.module.css";
import { Link } from "react-router-dom";

const DropdownMenu = (props) => {
    return (
        <div className={estilos.DropdownMenu} onClick={props.cerrar}>
            <nav>
                <ul>
                    <li>
                        <Link to="/multas" exact={true}>
                            Administrar Multas
                        </Link>
                    </li>
                    <li>
                        <Link to="/perfil" exact={true}>
                            Mi Perfil
                        </Link>
                    </li>
                    <li>Cerrar sesión</li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(DropdownMenu);