import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { Container, Typography, Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, CircularProgress } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import estilos from "./Multa.module.css";
import { connect } from "react-redux";
import ErrorSnackbar from "../UI/ErrorSnackbar";
import { cargarMulta, cambiarEstado } from "../../store/actions/multa";

class Multa extends Component {
    state = {
        mostrarDialogAceptar: false,
        mostrarDialogRechazar: false,
        razonAceptar: "",
        razonRechazar: "",
    };

    componentDidMount = () => {
        const id = this.props.location.pathname.concat("").split("/")[2];
        this.props.cargarMulta(id);
    }

    toggleDialogHandler = (accion) => {
        let nuevoEstado;
        if (accion === "aceptar") {
            nuevoEstado = !this.state.mostrarDialogAceptar;
            this.setState({mostrarDialogAceptar: nuevoEstado});
        }
        if (accion === "rechazar") {
            nuevoEstado = !this.state.mostrarDialogRechazar;
            this.setState({mostrarDialogRechazar: nuevoEstado});
        }
    }

    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <ErrorSnackbar open={this.props.error} message={this.props.error.toString()} />
                {this.props.cargando ? <CircularProgress /> : null}
                {!this.props.cargando && !this.props.error ?
                    <Fragment>
                        <Container>
                            <Typography variant="h3">Detalles de la multa {this.props.multa.id}</Typography>
                            <Grid container={true} spacing={1}>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Ubicación</Typography>
                                        <Grid container={true} spacing={3}>
                                            <Grid item={true}>
                                                <Typography variant="overline">Fecha</Typography>
                                                <Typography variant="body2">{this.props.multa.ubicacion.fecha}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Hora</Typography>
                                                <Typography variant="body2">{this.props.multa.ubicacion.hora}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Lugar de constatación</Typography>
                                                <Typography variant="body2">{this.props.multa.ubicacion.lugar}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Licencia</Typography>
                                        <Grid container={true} spacing={3}>
                                            <Grid item={true}>
                                                <Typography variant="overline">Número de licencia</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.nroLicencia}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Única provincial</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.unicaProvincial}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Clase</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.clase}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Vencimiento</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.vencimiento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Licencia retenida</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.retenida}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">País</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.pais}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Provincia</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.provincia}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Departamento</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.departamento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Localidad</Typography>
                                                <Typography variant="body2">{this.props.multa.licencia.localidad}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Conductor</Typography>
                                        <Grid container={true} spacing={3}>
                                            <Grid item={true}>
                                                <Typography variant="overline">Apellido</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.apellido}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Nombre</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.nombre}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Sexo</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.sexo}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Fecha de nacimiento</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.fechaNacimiento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Tipo de documento</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.tipoDocumento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Número de documento</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.nroDocumento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Calle</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.calle}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Número</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.numero}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Piso</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.piso}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Departamento</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.departamento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Localidad</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.localidad}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Código postal</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.codigoPostal}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Provincia</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.provincia}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">País</Typography>
                                                <Typography variant="body2">{this.props.multa.conductor.pais}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Vehículo</Typography>
                                        <Grid container={true} spacing={3}>
                                            <Grid item={true}>
                                                <Typography variant="overline">Dominio</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.dominio}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Marca</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.marca}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Modelo</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.modelo}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Tipo</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.tipo}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Titular</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.titular}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Tipo de documento</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.tipoDocumento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Número de documento</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.nroDocumento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Calle</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.calle}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Número</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.numero}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Piso</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.piso}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Departamento</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.departamento}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Localidad</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.localidad}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Código postal</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.codigoPostal}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Provincia</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.provincia}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">País</Typography>
                                                <Typography variant="body2">{this.props.multa.vehiculo.pais}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Infracción</Typography>
                                        <Grid container={true} spacing={3}>
                                            <Grid item={true}>
                                                <Typography variant="overline">Código de infracción</Typography>
                                                <Typography variant="body2">{this.props.multa.infraccion.codigo}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Artículo nº</Typography>
                                                <Typography variant="body2">{this.props.multa.infraccion.articulo}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Inciso nº</Typography>
                                                <Typography variant="body2">{this.props.multa.infraccion.inciso}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Extracto</Typography>
                                                <Typography variant="body2">{this.props.multa.infraccion.extracto}</Typography>
                                            </Grid>
                                            <Grid item={true}>
                                                <Typography variant="overline">Observaciones</Typography>
                                                <Typography variant="body2">{this.props.multa.infraccion.observaciones}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Funcionario interviniente</Typography>
                                        <Grid container={true} spacing={3}>
                                            <Grid item={true}>
                                                <Typography variant="overline">Nombre</Typography>
                                                <Typography variant="body2">{this.props.multa.idInspector}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Pruebas fotográficas</Typography>
                                        {this.props.multa.fotos.length > 0 ? 
                                            <Grid container={true} spacing={1}>
                                                {this.props.multa.fotos.map(foto => (
                                                    <Grid item={true}>
                                                        <img src={foto} />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        : <Typography variant="body2">El inspector no adjuntó pruebas fotográficas</Typography>}
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Paper elevation={3} className={estilos.GridItem}>
                                        <Typography variant="h6">Vencimientos</Typography>
                                        <Grid container={true} spacing={3}>
                                            <Grid item={true} xs={6}>
                                                <Typography variant="overline">Primer vencimiento</Typography>
                                                <Typography variant="body2">{this.props.multa.vencimientos.fechaPrimerVencimiento}</Typography>
                                            </Grid>
                                            <Grid item={true} xs={6}>
                                                <Typography variant="overline">Monto</Typography>
                                                <Typography variant="body2">{this.props.multa.vencimientos.montoPrimerVencimiento}</Typography>
                                            </Grid>
                                            <Grid item={true} xs={6}>
                                                <Typography variant="overline">Segundo vencimiento</Typography>
                                                <Typography variant="body2">{this.props.multa.vencimientos.fechaSegundoVencimiento}</Typography>
                                            </Grid>
                                            <Grid item={true} xs={6}>
                                                <Typography variant="overline">Monto</Typography>
                                                <Typography variant="body2">{this.props.multa.vencimientos.montoSegundoVencimiento}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Typography>Estado de la multa: </Typography>
                            <Typography>{this.props.multa.estado}</Typography>
                            <Grid container={true}>
                                <Grid item={true} xs={6}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth={true}
                                        size="large"
                                        startIcon={<Check />}
                                        onClick={() => this.toggleDialogHandler("aceptar")}
                                    >
                                        Aceptar multa
                                    </Button>
                                </Grid>
                                <Grid item={true} xs={6}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth={true}
                                        size="large"
                                        startIcon={<Close />}
                                        onClick={() => this.toggleDialogHandler("rechazar")}
                                    >
                                        Rechazar multa
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                        <Dialog open={this.state.mostrarDialogAceptar} onClose={() => this.toggleDialogHandler("aceptar")}>
                            <DialogTitle>
                                Aceptar multa
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    ¿Está seguro de que quiere aceptar esta multa?. Debe brindar una razón.
                                </DialogContentText>
                                <TextField
                                    id="razonAceptar"
                                    label="Razón para aceptar la multa"
                                    multiline={true}
                                    rows={4}
                                    fullWidth={true}
                                    value={this.state.razonAceptar}
                                    onChange={this.inputHandler}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.toggleDialogHandler("aceptar")}>Cancelar</Button>
                                <Button
                                    color="primary"
                                    disabled={this.state.razonRechazar === ""}
                                    onClick={() => this.props.cambiarEstado(this.props.multa.id, "Aceptada", this.state.razonAceptar)}
                                >
                                    Aceptar multa
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog open={this.state.mostrarDialogRechazar} onClose={() => this.toggleDialogHandler("rechazar")}>
                            <DialogTitle>
                                Rechazar multa
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    ¿Está seguro de que quiere rechazar esta multa?. Debe brindar una razón.
                                </DialogContentText>
                                <TextField
                                    id="razonRechazar"
                                    label="Razón para rechazar la multa"
                                    multiline={true}
                                    rows={4}
                                    fullWidth={true}
                                    value={this.state.razonRechazar}
                                    onChange={this.inputHandler}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.toggleDialogHandler("rechazar")}>Cancelar</Button>
                                <Button
                                    color="primary"
                                    disabled={this.state.razonRechazar === ""}
                                    onClick={() => this.props.cambiarEstado(this.props.multa.id, "Rechazada", this.state.razonRechazar)}
                                >
                                    Rechazar multa
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Fragment>
                : null }
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        multa: state.multa.multa,
        cargando: state.multa.cargando,
        error: state.multa.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cargarMulta: (id) => {dispatch(cargarMulta(id))},
        cambiarEstado: (id, estado, razon) => {dispatch(cambiarEstado(id, estado, razon))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Multa));