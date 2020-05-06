import React, {Component} from 'react';
import './App.css';
import MultaResumida from "./MultaResumida/MultaResumida";
import BarraSuperior from "./BarraSuperior/BarraSuperior";

class App extends Component{
  state = {
    multas: [ // esto contiene los resumenes de todas las multas sacado directamente de la db
      // lo que esta aca cargado es a modo de ejemplo, se saca al tener acceso a la db
      {
        id: "asdasdasd",
        nombreConductor: "Freeman Gordon",
        dniConductor: "12.345.678",
        fecha: "1/01/20",
        extracto: "Circular por encima de la velocidad máxima permitida",
        estado: "No resuelta",
      },
      {
        id: "asdasdasd",
        nombreConductor: "Jensen Adam",
        dniConductor: "23.456.789",
        fecha: "2/01/20",
        extracto: "Circular con RTO vencida al día de la fecha",
        estado: "Aceptada",
      },
      {
        id: "asdasdasd",
        nombreConductor: "Yu Morgan",
        dniConductor: "34.567.890",
        fecha: "3/01/20",
        extracto: "Estacionar sobre calzada amarilla",
        estado: "Rechazada",
      },
    ],
    usuario:
    {
      nombre: "Juan Pérez",
      imagen: "https://frre.cvg.utn.edu.ar/pluginfile.php/1/theme_snap/favicon/1587712311/logo_favicon.ico",
    }
  }

  render() {
    let multasParaMostrar = []; // crea un array con las multas que se van a mostrar
    let numeroDeMultasSinResolver = 0; // el numero total de multas que estan sin resolver
    let textoDeMultasSinResolver = ""; // el texto que se va a mostrar debajo del h2 que da la bienvenida

    this.state.multas.forEach((multa) => { // ejecuta por cada multa del estado
      // ACA VAN LAS CONDICIONES DE FILTRADO
      // if (cumpleConLasCondicionesDeFiltrado)
      if (multa.estado === "No resuelta") {
        numeroDeMultasSinResolver++;
      }
      multasParaMostrar.push( // crea el componente por cada multa que va a mostrar
        <MultaResumida id={multa.id}
        nombreConductor={multa.nombreConductor}
        dniConductor={multa.dniConductor}
        fecha={multa.fecha}
        extracto={multa.extracto}
        estado={multa.estado} />
      );
    });

    if (numeroDeMultasSinResolver === 0) {
      textoDeMultasSinResolver = "No quedan multas sin resolver";
    } else if (numeroDeMultasSinResolver === 1) {
      textoDeMultasSinResolver = "Tiene 1 multa sin resolver";
    } else {
      textoDeMultasSinResolver = "Tiene " + numeroDeMultasSinResolver + " multas sin resolver";
    }

    return (
      <div className="App">
        <BarraSuperior nombre={this.state.usuario.nombre} imagen={this.state.usuario.imagen} />
        <h1>Bienvenido, {this.state.usuario.nombre}</h1>
        <h2>{textoDeMultasSinResolver}</h2>
        {multasParaMostrar}
      </div>
    );
  }
}

export default App;
