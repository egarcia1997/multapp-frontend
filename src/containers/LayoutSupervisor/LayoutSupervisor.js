import React, { Component } from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import MultasResumidas from "../../components/MultasResumidas/MultasResumidas";
import Perfil from "../../components/Perfil/Perfil";
import estilos from "../Layout.module.css";

class LayoutSupervisor extends Component {
    render() {
        return (
            <div className={estilos.Layout}>
                <BarraSuperior nombre={this.props.usuario.nombre} imagen={this.props.usuario.imagen} />
                <div className={estilos.Contenido}>
                    <Switch>
                        <Route path="/multas" render={() => <MultasResumidas nombreUsuario={this.props.usuario.nombre} />} />
                        <Route path="/perfil" component={Perfil} />
                        {/* esto es temporal, esta para probar nomas */}
                        <Redirect from="/" to="/multas" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default LayoutSupervisor;