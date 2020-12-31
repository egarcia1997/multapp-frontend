import React, { Component, Fragment } from "react";
import { Container, List, Fab, createMuiTheme, Tooltip, CircularProgress } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Notifier from "../Notifier/Notifier";
import { cargarVehiculos } from "../../store/actions/vehiculos";
import MarcaDeVehiculos from "../MarcaDeVehiculos/MarcaDeVehiculos";
import AgregarMarca from "../AgregarMarca/AgregarMarca";
import { abrirDialogAgregarMarca, cerrarDialogAgregarMarca } from "../../store/actions/agregarMarca";

class Vehiculos extends Component {
    state = {
        mostrarDialogAgregarModelo: false,
        mostrarDialogEliminarMarca: false,
        mostrarDialogEliminarModelo: false,
        marcaSeleccionada: "",
        modeloSeleccionado: "",
    }

    componentDidMount = () => {
        this.props.cargarVehiculos();
    }

    toggleAgregarModelo = () => {}

    onDeleteMarca = () => {}

    onDeleteModelo = () => {}

    render() {
        const theme = createMuiTheme();

        return (
            <Fragment>
                <Container maxWidth="lg" style={{minHeight: "100vh"}}>
                    {this.props.cargando ? <CircularProgress /> :
                        <Fragment>
                            <List>
                                {this.props.vehiculos.map(vehiculo => (
                                    <MarcaDeVehiculos
                                        key={vehiculo.id}
                                        logo={vehiculo.logo}
                                        marca={vehiculo.marca}
                                        modelos={vehiculo.modelos}
                                        onAddModelo
                                        onDeleteMarca
                                        onDeleteModelo
                                    />
                                ))}
                            </List>
                            <Tooltip title="Agregar marca" placement="left" arrow>
                                <Fab color="primary" onClick={this.props.abrirDialogAgregarMarca} style={{position: "fixed", bottom: theme.spacing(5), right: theme.spacing(5)}}>
                                    <Add />
                                </Fab>
                            </Tooltip>

                            <AgregarMarca open={this.props.mostrarDialogAgregarMarca} onClose={this.props.cerrarDialogAgregarMarca} />
                        </Fragment>
                    }
                </Container>
                <Notifier />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        vehiculos: state.vehiculos.vehiculos,
        cargando: state.vehiculos.cargando,
        error: state.vehiculos.error,
        textoDeError: state.vehiculos.textoDeError,
        mostrarDialogAgregarMarca: state.agregarMarca.mostrarDialog,
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        cargarVehiculos: () => dispatch(cargarVehiculos()),
        abrirDialogAgregarMarca: () => dispatch(abrirDialogAgregarMarca()),
        cerrarDialogAgregarMarca: () => dispatch(cerrarDialogAgregarMarca())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(withRouter(Vehiculos)));