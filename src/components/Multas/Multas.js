import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Typography, TableHead, TableRow, TableCell, Table, TableContainer, Paper, TableBody, CircularProgress, Container, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import Filtro from "./Filtro/Filtro";
import { cargarMultas } from "../../store/actions/multas";
import { connect } from 'react-redux';

class Multas extends Component {
    state = {
        condicionesDeFiltrado: { // las condiciones de filtrado de las multas
            noResueltas: true,
            aceptadas: true,
            rechazadas: true,
            desde: "2020-01-01",
            hasta: new Date().toISOString().slice(0, 10),
            dni: "",
        },
        cargando: true, // controla si ya se cargaron las multas o no
        mostrarFiltro: false, // controla si se muestran las opciones de filtros
    }

    // recupero el listado de todas las multas del servidor y lo meto en el estado
    componentDidMount() {
        this.props.cargarMultas();
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

    // metodo que carga todos los datos de una multa al hacer clic en una
    multaSeleccionadaHandler = (id) => {
        this.props.history.push("/multas/" + id);
    }

    render() {
        let numeroDeMultasSinResolver = 0; // el numero total de multas que estan sin resolver
        let textoDeMultasSinResolver = ""; // el texto que se va a mostrar debajo del h2 que da la bienvenida

        let multasFiltradas = this.props.multas.filter(multa => {
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
            if (multa.estado === "No resuelta") {
                numeroDeMultasSinResolver++;
            }
            return seDebeMostrar;
        });
  
        let multasParaMostrar = multasFiltradas.map(multa => (
            <TableRow key={multa.id} hover={true} onClick={() => this.multaSeleccionadaHandler(multa.id)}>
                <TableCell>{multa.id}</TableCell>
                <TableCell>{multa.dniConductor}</TableCell>
                <TableCell>{multa.nombreConductor}</TableCell>
                <TableCell>{multa.fecha}</TableCell>
                <TableCell>{multa.extracto}</TableCell>
            </TableRow>
        ));
        
        if (numeroDeMultasSinResolver === 0) {
            textoDeMultasSinResolver = "No quedan multas sin resolver";
        } else if (numeroDeMultasSinResolver === 1) {
            textoDeMultasSinResolver = "Tiene 1 multa sin resolver";
        } else {
            textoDeMultasSinResolver = "Tiene " + numeroDeMultasSinResolver + " multas sin resolver";
        }
  
        return (
            <Container maxWidth="lg" style={{minHeight: "100vh"}}>
                <Snackbar open={this.props.error}>
                    <Alert severity="error">{this.props.error.toString()}</Alert>
                </Snackbar>
                <Typography variant="h3">Bienvenido, {this.props.nombreUsuario}</Typography>
                {this.props.cargando ? <CircularProgress /> : null}
                {!this.props.cargando && !this.props.error ?
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

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const mapStateToProps = state => {
    return {
        multas: state.multas.multas,
        cargando: state.multas.cargando,
        error: state.multas.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cargarMultas: () => dispatch(cargarMultas()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Multas));