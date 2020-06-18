import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { Container, Typography, Grid, Paper } from "@material-ui/core";

class MultaDetallada extends Component {
    state = {
        cargando: true,
        huboError: false,
        multa: {},
    };

    componentDidMount = () => {
        axios.get("/getAll/" + this.props.id)
            .then(response => {
                console.log(response);
                this.setState({
                    cargando: false,
                    huboError: false,
                    multa: response.data,
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    cargando: false,
                    huboError: true,
                })
            });
    }

    render() {
        return (
            <Container>
                <Typography variant="h3">Detalles de la multa {this.props.id}</Typography>
                <Grid container={true} spacing={1}>
                    <Grid item={true} xs={12}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Ubicación</Typography>
                            <Typography variant="overline">Fecha</Typography>
                            <Typography variant="body2">{this.state.fecha}</Typography>
                            <Typography variant="overline">Hora</Typography>
                            <Typography variant="body2">{this.state.hora}</Typography>
                            <Typography variant="overline">Lugar de constatación</Typography>
                            <Typography variant="body2">{this.state.lugar}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Licencia</Typography>
                            <Typography variant="overline">Número de licencia</Typography>
                            <Typography variant="body2">{this.state.nroLicencia}</Typography>
                            <Typography variant="overline">Única provincial</Typography>
                            <Typography variant="body2">{this.state.unicaProvincial}</Typography>
                            <Typography variant="overline">Clase</Typography>
                            <Typography variant="body2">{this.state.clase}</Typography>
                            <Typography variant="overline">Vencimiento</Typography>
                            <Typography variant="body2">{this.state.vencimiento}</Typography>
                            <Typography variant="overline">Licencia retenida</Typography>
                            <Typography variant="body2">{this.state.retenida}</Typography>
                            <Typography variant="overline">País</Typography>
                            <Typography variant="body2">{this.state.paisLicencia}</Typography>
                            <Typography variant="overline">Provincia</Typography>
                            <Typography variant="body2">{this.state.provinciaLicencia}</Typography>
                            <Typography variant="overline">Departamento</Typography>
                            <Typography variant="body2">{this.state.departamentoLicencia}</Typography>
                            <Typography variant="overline">Localidad</Typography>
                            <Typography variant="body2">{this.state.localidadLicencia}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Conductor</Typography>
                            <Typography variant="overline">Apellido</Typography>
                            <Typography variant="body2">{this.state.apellidoConductor}</Typography>
                            <Typography variant="overline">Nombre</Typography>
                            <Typography variant="body2">{this.state.nombreConductor}</Typography>
                            <Typography variant="overline">Sexo</Typography>
                            <Typography variant="body2">{this.state.sexoConductor}</Typography>
                            <Typography variant="overline">Fecha de nacimiento</Typography>
                            <Typography variant="body2">{this.state.fechaNacimiento}</Typography>
                            <Typography variant="overline">Tipo de documento</Typography>
                            <Typography variant="body2">{this.state.tipoDocumentoConductor}</Typography>
                            <Typography variant="overline">Número de documento</Typography>
                            <Typography variant="body2">{this.state.nroDocumentoConductor}</Typography>
                            <Typography variant="overline">Calle</Typography>
                            <Typography variant="body2">{this.state.calleConductor}</Typography>
                            <Typography variant="overline">Número</Typography>
                            <Typography variant="body2">{this.state.numeroConductor}</Typography>
                            <Typography variant="overline">Piso</Typography>
                            <Typography variant="body2">{this.state.pisoConductor}</Typography>
                            <Typography variant="overline">Departamento</Typography>
                            <Typography variant="body2">{this.state.departamentoConductor}</Typography>
                            <Typography variant="overline">Localidad</Typography>
                            <Typography variant="body2">{this.state.localidadConductor}</Typography>
                            <Typography variant="overline">Código postal</Typography>
                            <Typography variant="body2">{this.state.codigoPostalConductor}</Typography>
                            <Typography variant="overline">Provincia</Typography>
                            <Typography variant="body2">{this.state.provinciaConductor}</Typography>
                            <Typography variant="overline">País</Typography>
                            <Typography variant="body2">{this.state.paisConductor}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Vehículo</Typography>
                            <Typography variant="overline">Dominio</Typography>
                            <Typography variant="body2">{this.state.dominio}</Typography>
                            <Typography variant="overline">Marca</Typography>
                            <Typography variant="body2">{this.state.marca}</Typography>
                            <Typography variant="overline">Modelo</Typography>
                            <Typography variant="body2">{this.state.modelo}</Typography>
                            <Typography variant="overline">Tipo</Typography>
                            <Typography variant="body2">{this.state.tipo}</Typography>
                            <Typography variant="overline">Titular</Typography>
                            <Typography variant="body2">{this.state.titular}</Typography>
                            <Typography variant="overline">Tipo de documento</Typography>
                            <Typography variant="body2">{this.state.tipoDocumentoTitular}</Typography>
                            <Typography variant="overline">Número de documento</Typography>
                            <Typography variant="body2">{this.state.nroDocumentoTitular}</Typography>
                            <Typography variant="overline">Calle</Typography>
                            <Typography variant="body2">{this.state.calleTitular}</Typography>
                            <Typography variant="overline">Número</Typography>
                            <Typography variant="body2">{this.state.numeroTitular}</Typography>
                            <Typography variant="overline">Piso</Typography>
                            <Typography variant="body2">{this.state.pisoTitular}</Typography>
                            <Typography variant="overline">Departamento</Typography>
                            <Typography variant="body2">{this.state.departamentoTitular}</Typography>
                            <Typography variant="overline">Localidad</Typography>
                            <Typography variant="body2">{this.state.localidadTitular}</Typography>
                            <Typography variant="overline">Código postal</Typography>
                            <Typography variant="body2">{this.state.codigoPostalTitular}</Typography>
                            <Typography variant="overline">Provincia</Typography>
                            <Typography variant="body2">{this.state.provinciaTitular}</Typography>
                            <Typography variant="overline">País</Typography>
                            <Typography variant="body2">{this.state.paisTitular}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Infracción</Typography>
                            <Typography variant="overline">Código de infracción</Typography>
                            <Typography variant="body2">{this.state.codigoInfraccion}</Typography>
                            <Typography variant="overline">Artículo nº</Typography>
                            <Typography variant="body2">{this.state.articulo}</Typography>
                            <Typography variant="overline">Inciso nº</Typography>
                            <Typography variant="body2">{this.state.inciso}</Typography>
                            <Typography variant="overline">Extracto</Typography>
                            <Typography variant="body2">{this.state.extracto}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Inspector</Typography>
                            <Typography variant="overline">Nombre</Typography>
                            <Typography variant="body2">{this.state.nombreInspector}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Pruebas fotográficas</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default withRouter(MultaDetallada);