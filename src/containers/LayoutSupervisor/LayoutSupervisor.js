import React, { Component, Fragment } from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import MultasResumidas from "../../components/MultasResumidas/MultasResumidas";
import Perfil from "../../components/Perfil/Perfil";

class LayoutSupervisor extends Component {
    render() {
        return (
            <Fragment>
                <BarraSuperior nombre={this.props.usuario.nombre} imagen={this.props.usuario.imagen} />
                <Switch>
                    <Route path="/multas" render={() => <MultasResumidas nombreUsuario={this.props.usuario.nombre} />} />
                    <Route path="/perfil" component={Perfil} />
                    {/* esto es temporal, esta para probar nomas */}
                    <Redirect from="/" to="/multas" />
                </Switch>
            </Fragment>
        );
    }
}

export default LayoutSupervisor;