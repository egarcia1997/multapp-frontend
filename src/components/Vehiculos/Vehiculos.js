import React, { Component, Fragment } from "react";
import { Container, List, Fab, createMuiTheme, Tooltip, CircularProgress } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Notifier from "../Notifier/Notifier";
import { cargarVehiculos } from "../../store/actions/vehiculos";
import MarcaDeVehiculos from "../MarcaDeVehiculos/MarcaDeVehiculos";

class Vehiculos extends Component {
    componentDidMount = () => {
        this.props.cargarVehiculos();
    }

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
                                    />
                                ))}
                            </List>
                            <Tooltip title="Agregar marca" placement="left" arrow>
                                <Fab color="primary" onClick={this.props.abrirDialogEditar} style={{position: "fixed", bottom: theme.spacing(5), right: theme.spacing(5)}}>
                                    <Add />
                                </Fab>
                            </Tooltip>
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
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        cargarVehiculos: () => {dispatch(cargarVehiculos())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(withRouter(Vehiculos)));