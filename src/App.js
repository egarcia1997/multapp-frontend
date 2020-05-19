import React, {Component, Fragment} from 'react';
import './App.css';
import MultasResumidas from "./components/MultasResumidas/MultasResumidas";
import BarraSuperior from "./components/BarraSuperior/BarraSuperior";

class App extends Component{
  state = {
    usuario:
    {
      nombre: "Juan Pérez",
      imagen: "https://frre.cvg.utn.edu.ar/pluginfile.php/1/theme_snap/favicon/1587712311/logo_favicon.ico",
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
