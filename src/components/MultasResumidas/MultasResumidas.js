import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {Button, Typography, TableHead, TableRow, TableCell, Table, TableContainer, Paper, TableBody, CircularProgress, Container} from "@material-ui/core";
import Filtro from "../MultasResumidas/Filtro/Filtro";

class MultasResumidas extends Component {
    state = {
        multas: [ // esto contiene los resumenes de todas las multas sacado directamente de la db
            // lo que esta aca cargado es a modo de ejemplo, se saca al tener acceso a la db
            {
                id: "1",
                nombreConductor: "Freeman Gordon",
                dniConductor: "12345678",
                fecha: "2020-01-01",
                extracto: "Circular por encima de la velocidad máxima permitida",
                estado: "No resuelta",
            },
            {
                id: "2",
                nombreConductor: "Jensen Adam",
                dniConductor: "23456789",
                fecha: "2020-01-02",
                extracto: "Circular con RTO vencida al día de la fecha",
                estado: "Aceptada",
            },
            {
                id: "3",
                nombreConductor: "Yu Morgan",
                dniConductor: "34567890",
                fecha: "2020-01-03",
                extracto: "Estacionar sobre calzada amarilla",
                estado: "Rechazada",
            },
        ],
        condicionesDeFiltrado: { // las condiciones de filtrado de las multas
            noResueltas: true,
            aceptadas: true,
            rechazadas: true,
            desde: "2020-01-01",
            hasta: new Date().toISOString().slice(0, 10),
            dni: "",
        },
        multasCargadas: false, // controla si ya se cargaron las multas o no
        mostrarFiltro: false, // controla si se muestran las opciones de filtros
        huboErrorAlCargarLasMultas: false, // controla si hubo un error al cargar las multas
        textoDeError: "",
    }

    // hook del ciclo de vida en el que recupero el listado de todas las multas del servidor
    // y lo meto en el estado (pero solo los datos mas importantes)
    componentDidMount() {
        //if (!this.state.multasCargadas) { // si no se cargaron las multas ejecuta esto
            axios.get("/getAll") // hace la peticion al servidor
                .then(response => { // una vez que llegue todo hace esto
                    console.log(response); // muestra por consola la respuesta
                    const multasIDs = Object.keys(response.data).map(multaID => { // itera sobre los id de las multas para ir cargando las multas resumidas
                        const multa = { // crea una multa resumida. los datos los saca de response.data
                            id: multaID,
                            nombreConductor: response.data[multaID]["apellidoInfractor"] + response.data[multaID]["nombresInfractor"],
                            dniConductor: response.data[multaID]["NroDoc"],
                            fecha: response.data[multaID]["FechaEmision"],
                            extracto: "falta agregar a la db",
                            estado: "tambien falta agregar a la db",
                        }
                        return multa; // mete esa multa en el array de multas resumidas
                    });
                    this.setState({multas: multasIDs}); // actualiza el state con el array de las multas resumidas sacadas de la db
                    this.setState({multasCargadas: true}); // actualiza el state para que no se vuelva a hacer la peticion al servidor
                }).catch(error => { // si hubo error hace esto
                    console.log(error); // muestra por consola el error
                    this.setState({huboErrorAlCargarLasMultas: true}); // actualiza el state para decir que hubo error
                    this.setState({multasCargadas: true}); // actualiza el state para que no se vuelva a hacer la peticion al servidor
                    this.setState({textoDeError: error});
                });
        //}
    }

    // metodo para mostrar/ocultar las opciones de filtrado
    toggleFiltroHandler = () => {
        const nuevoEstado = !(this.state.mostrarFiltro);
        this.setState({mostrarFiltro: nuevoEstado});
    }

    // metodo para aplicar los filtros seleccionados
    filtrarHandler = (condiciones) => {
        this.setState({condicionesDeFiltrado: condiciones});
        this.toggleFiltroHandler();
    }

    // metodo que carga todos los datos de una multa
    // se ejecuta al hacer clic en una multa
    multaSeleccionadaHandler = (id) => {
        this.props.history.push("/multas/" + id);
    }

    render() {
        let numeroDeMultasSinResolver = 0; // el numero total de multas que estan sin resolver
        let textoDeMultasSinResolver = ""; // el texto que se va a mostrar debajo del h2 que da la bienvenida

        let multasFiltradas = this.state.multas.filter(multa => { // ejecuta por cada multa del estado
            // primero controla si la multa cumple con las condiciones de filtrado
            let seDebeMostrar = true;
            if (!this.state.condicionesDeFiltrado.noResueltas && multa.estado === "No resuelta") {
                seDebeMostrar = false;
            }
            if (!this.state.condicionesDeFiltrado.aceptadas && multa.estado === "Aceptada") {
                seDebeMostrar = false;
            }
            if (!this.state.condicionesDeFiltrado.rechazadas && multa.estado === "Rechazada") {
                seDebeMostrar = false;
            }
            if (this.state.condicionesDeFiltrado.desde > multa.fecha) {
                seDebeMostrar = false;
            }
            if (this.state.condicionesDeFiltrado.hasta < multa.fecha) {
                seDebeMostrar = false;
            }
            if (this.state.condicionesDeFiltrado.dni !== "" && this.state.condicionesDeFiltrado.dni !== multa.dniConductor) {
                seDebeMostrar = false;
            }
            if (multa.estado === "No resuelta") { // si la multa no fue resuelta
                numeroDeMultasSinResolver++; // actualiza el contador de multas no resueltas
            }
            return seDebeMostrar;
        });
  
        let multasParaMostrar = multasFiltradas.map(multa => (
            <TableRow key={multa.id} hover={true} onClick={() => this.multaSeleccionadaHandler(multa.id)}>
                <TableCell>{multa.id}</TableCell>
                <TableCell>{multa.nombreConductor}</TableCell>
                <TableCell>{multa.dniConductor}</TableCell>
                <TableCell>{multa.fecha}</TableCell>
                <TableCell>{multa.extracto}</TableCell>
            </TableRow>
        ));
        
        if (numeroDeMultasSinResolver === 0) { // segun el numero de multas sin resolver, muestra un mensaje informando eso
            textoDeMultasSinResolver = "No quedan multas sin resolver";
        } else if (numeroDeMultasSinResolver === 1) {
            textoDeMultasSinResolver = "Tiene 1 multa sin resolver";
        } else {
            textoDeMultasSinResolver = "Tiene " + numeroDeMultasSinResolver + " multas sin resolver";
        }
  
        return (
            <Container>
                <Typography variant="h3">Bienvenido, {this.props.nombreUsuario}</Typography>
                {!this.state.multasCargadas ?
                    <Fragment>
                        <CircularProgress />
                        <Typography>Cargando multas</Typography>
                    </Fragment>
                : null}
                {this.state.huboErrorAlCargarLasMultas ? 
                    <Fragment>
                        <Typography variant="h5" color="error">
                            Ha ocurrido un error. Intente recargar la página.
                        </Typography>
                        <Typography variant="h6" color="error">
                            Si el problema persiste, contacte con un administrador.
                        </Typography>
                        <Typography variant="caption" color="error">
                            {this.state.textoDeError.toString()}
                        </Typography>
                    </Fragment>
                : null}
                {/* descomentar esta linea cuando arreglen la base de datos */}
                {/* {this.state.multasCargadas && !this.state.huboErrorAlCargarLasMultas ?  */}
                {this.state.multasCargadas ? 
                    <Fragment>
                        <Typography variant="h5">{textoDeMultasSinResolver}</Typography>
                        <Button variant="contained" color="primary" onClick={this.toggleFiltroHandler}>
                            Filtrar
                        </Button>
                        <Filtro
                            open={this.state.mostrarFiltro}
                            onClose={this.toggleFiltroHandler}
                            default={this.state.condicionesDeFiltrado}
                            aplicar={this.filtrarHandler}
                        />
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>DNI del conductor</TableCell>
                                        <TableCell>Nombre del conductor</TableCell>
                                        <TableCell>Fecha</TableCell>
                                        <TableCell>Extracto</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {multasParaMostrar}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Fragment>
                : null}
            </Container>
        );
    }
}
  
MultasResumidas.propTypes = {
    nombreUsuario: PropTypes.string.isRequired,
}

export default withRouter(MultasResumidas);