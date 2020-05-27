import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import estilos from './MultasResumidas.module.css';
import Filtro from "../MultasResumidas/Filtro/Filtro";
import MultaResumida from "./MultaResumida/MultaResumida";

class MultasResumidas extends Component {
    state = {
        multas: [ // esto contiene los resumenes de todas las multas sacado directamente de la db
            // lo que esta aca cargado es a modo de ejemplo, se saca al tener acceso a la db
            {
                id: "1",
                nombreConductor: "Freeman Gordon",
                dniConductor: "12.345.678",
                fecha: "1/01/20",
                extracto: "Circular por encima de la velocidad máxima permitida",
                estado: "No resuelta",
            },
            {
                id: "2",
                nombreConductor: "Jensen Adam",
                dniConductor: "23.456.789",
                fecha: "2/01/20",
                extracto: "Circular con RTO vencida al día de la fecha",
                estado: "Aceptada",
            },
            {
                id: "3",
                nombreConductor: "Yu Morgan",
                dniConductor: "34.567.890",
                fecha: "3/01/20",
                extracto: "Estacionar sobre calzada amarilla",
                estado: "Rechazada",
            },
        ],
        multasCargadas: false, // controla si ya se cargaron las multas o no
        mostrarFiltro: false, // controla si se muestran las opciones de filtros
        huboErrorAlCargarLasMultas: false, // controla si hubo un error al cargar las multas
    }

    // hook del ciclo de vida en el que recupero el listado de todas las multas del servidor
    // y lo meto en el estado (pero solo los datos mas importantes)
    componentDidMount() {
        if (!this.state.multasCargadas) { // si no se cargaron las multas ejecuta esto
            axios.get("/getAll") // hace la peticion al servidor
                .then(response => { // una vez que llegue todo hace esto
                    console.log(response); // muestra por consola la respuesta
                    let multasResumidas = []; // array donde voy a cargar las multas resumidas para luego meter en el state
                    const multasIDs = Object.keys(response.data); // crea un array con todos los id de las multas
                    multasIDs.map(multaID => { // itera sobre ese array para ir cargando las multas resumidas
                        const multa = { // crea una multa resumida. los datos los saca de response.data usando las keys de multasIDs
                            id: multaID,
                            nombreConductor: response.data[multaID]["apellidoInfractor"] + response.data[multaID]["nombresInfractor"],
                            dniConductor: response.data[multaID]["NroDoc"],
                            fecha: response.data[multaID]["FechaEmision"],
                            extracto: "falta agregar a la db",
                            estado: "tambien falta agregar a la db",
                        }
                        multasResumidas.push(multa); // mete esa multa en el array de multas resumidas
                    });
                    this.setState({multas: multasResumidas}); // actualiza el state con el array de las multas resumidas sacadas de la db
                    this.setState({multasCargadas: true}); // actualiza el state para que no se vuelva a hacer la peticion al servidor
                }).catch(error => { // si hubo error hace esto
                    console.log(error); // muestra por consola el error
                    this.setState({huboErrorAlCargarLasMultas: true}); // actualiza el state para decir que hubo error
                });
        }
    }

    // metodo para mostrar/ocultar las opciones de filtrado
    // o sea, el componente Filtro
    // se ejecuta al hacer clic en un boton mas abajo
    toggleFiltroHandler = () => {
        const nuevoEstado = !(this.state.mostrarFiltro);
        this.setState({mostrarFiltro: nuevoEstado});
    }

    render() {
        let multasParaMostrar = []; // crea un array con las multas que se van a mostrar
        let numeroDeMultasSinResolver = 0; // el numero total de multas que estan sin resolver
        let textoDeMultasSinResolver = ""; // el texto que se va a mostrar debajo del h2 que da la bienvenida
        let estilosDelBoton = [estilos.BotonDeFiltro]; // controla que estilos se le asignan al boton de mostrar filtros

        this.state.multas.forEach((multa) => { // ejecuta por cada multa del estado
            // ACA VAN LAS CONDICIONES DE FILTRADO
            // if (cumpleConLasCondicionesDeFiltrado)
            if (multa.estado === "No resuelta") { // si la multa no fue resuelta
                numeroDeMultasSinResolver++; // actualiza el contador de multas no resueltas
            }
            multasParaMostrar.push( // crea el componente por cada multa que va a mostrar
                <MultaResumida
                key={multa.id}
                id={multa.id}
                nombreConductor={multa.nombreConductor}
                dniConductor={multa.dniConductor}
                fecha={multa.fecha}
                extracto={multa.extracto}
                estado={multa.estado}
                click={() => alert("coso")} />
            );
        });
  
        if (numeroDeMultasSinResolver === 0) { // segun el numero de multas sin resolver, muestra un mensaje informando eso
            textoDeMultasSinResolver = "No quedan multas sin resolver";
        } else if (numeroDeMultasSinResolver === 1) {
            textoDeMultasSinResolver = "Tiene 1 multa sin resolver";
        } else {
            textoDeMultasSinResolver = "Tiene " + numeroDeMultasSinResolver + " multas sin resolver";
        }
  
        if (this.state.mostrarFiltro) {
            estilosDelBoton.push(estilos.BotonConFiltroDesplegado);
        }

        return (
            <div className={estilos.MultasResumidas}>
                <h1>Bienvenido, {this.props.nombreUsuario}</h1>
                <div className={estilos.Cargando}></div>
                <div className={estilos.Error} style={this.state.huboErrorAlCargarLasMultas ? {display: "block"} : null}>
                    <h2>Ha ocurrido un error</h2>
                    <h3>Intente recargar la página</h3>
                </div>
                <h2>{textoDeMultasSinResolver}</h2>
                <button className={estilosDelBoton.join(" ")} onClick={this.toggleFiltroHandler}>Filtrar</button>
                <Filtro visible={this.state.mostrarFiltro} />
                {multasParaMostrar}
            </div>
        );
    }
}
  
MultasResumidas.propTypes = {
    nombreUsuario: PropTypes.string.isRequired,
}

export default MultasResumidas;