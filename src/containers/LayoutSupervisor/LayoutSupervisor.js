import React, { Component } from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import MultasResumidas from "../../components/MultasResumidas/MultasResumidas";
import Perfil from "../../components/Perfil/Perfil";
import estilos from "../Layout.module.css";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";

class LayoutSupervisor extends Component {

    render() {
        return (
            <div className={estilos.Layout}>
                <BarraSuperior />
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

export default withRouter(LayoutSupervisor);