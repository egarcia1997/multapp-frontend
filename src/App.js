import React, {Component, Fragment} from 'react';
import './App.css';
import MultasResumidas from "./components/MultasResumidas/MultasResumidas";
import BarraSuperior from "./components/BarraSuperior/BarraSuperior";
import * as placeholder from "./assets/placeholder-vault-boy.png";

class App extends Component{
  state = {
    usuario:
    {
      nombre: "Juan Pérez",
      imagen: placeholder,
    }
  }

  render() {
    return (
      <Fragment>
        <BarraSuperior nombre={this.state.usuario.nombre} imagen={this.state.usuario.imagen} />
        <MultasResumidas nombreUsuario={this.state.usuario.nombre} />
      </Fragment>
    );
  }
}

export default App;
