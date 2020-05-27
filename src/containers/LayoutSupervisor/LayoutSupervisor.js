import React, { Component, Fragment } from "react";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import MultasResumidas from "../../components/MultasResumidas/MultasResumidas";

class LayoutSupervisor extends Component {
    render() {
        return (
            <Fragment>
                <BarraSuperior nombre={this.props.usuario.nombre} imagen={this.props.usuario.imagen} />
                <MultasResumidas nombreUsuario={this.props.usuario.nombre} />
            </Fragment>
        );
    }
}

export default LayoutSupervisor;