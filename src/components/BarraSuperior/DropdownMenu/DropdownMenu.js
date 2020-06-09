import React from "react";
import { withRouter } from "react-router";
import estilos from "./DropdownMenu.module.css";

const DropdownMenu = (props) => {
    return (
        <div className={estilos.DropdownMenu}>
            <nav>
                <ul>
                    <li>Multas</li>
                    <li>Perfil</li>
                    <li>Cerrar sesión</li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(DropdownMenu);