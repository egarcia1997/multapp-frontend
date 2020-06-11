import React, { Fragment, Component } from "react";
import estilos from "./BarraSuperior.module.css";
import * as applogo from "../../assets/multapp-logo.png";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

class BarraSuperior extends Component {
    state = {
        mostrarDropdownMenu: false,
    }

    mostrarDropdownHandler = () => {
        const nuevoValor = !this.state.mostrarDropdownMenu;
        this.setState({mostrarDropdownMenu: nuevoValor});
    }

    render() {
        let dropdownMenu = this.state.mostrarDropdownMenu ? <DropdownMenu cerrar={this.mostrarDropdownHandler} /> : null;
        return (
            <Fragment>
                <div className={estilos.BarraSuperior}>
                    {/* los elementos en el div de clase derecha se van a mostrar al reves de como estan aca */}
                    {/* porque en el css tiene el estilo flex-direction: row-reverse */}
                    <div className={estilos.Izquierda}>
                        <img src={applogo} alt="Logo de MultApp" width="48" height="48" />
                        <span>MultApp</span>
                    </div>
                    <div className={estilos.Derecha} onClick={this.mostrarDropdownHandler}>
                        <img src={this.props.imagen} alt="Su foto de perfil" width="48" height="48" />
                        <span>{this.props.nombre}</span>
                    </div>
                </div>
                {dropdownMenu}
            </Fragment>
        );
    }
}

export default BarraSuperior;