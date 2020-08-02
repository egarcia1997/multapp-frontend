import React, { Component } from "react";
import { connect } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, CircularProgress } from "@material-ui/core";
import { cambiarContrasena, abrirDialogCambiarContrasena, cerrarDialogCambiarContrasena } from "../../store/actions/cambiarContrasena";

class CambiarContrasena extends Component {
    state = {
        contrasenaActual: "",
        nuevaContrasena: "",
        repitaContrasena: "",
        errorNuevaContrasena: "",
        errorRepitaContrasena: "",
        aceptable: false,
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value}, () => {
            if (this.state.contrasenaActual !== "" || this.state.nuevaContrasena !== "" || this.state.repitaContrasena !== "") {
                this.setState({aceptable: true});
            }
            if (this.state.contrasenaActual === this.state.nuevaContrasena) {
                this.setState({errorNuevaContrasena: "La nueva contraseña es igual a la actual", aceptable: false});
            }
            else {
                this.setState({errorNuevaContrasena: ""});
            }
            if (this.state.nuevaContrasena.length < 6) {
                this.setState({errorNuevaContrasena: "La contraseña debe tener 6 o más caracteres", aceptable: false});
            }
            else {
                this.setState({errorNuevaContrasena: ""});
            }
            if (this.state.nuevaContrasena !== this.state.repitaContrasena) {
                this.setState({errorRepitaContrasena: "Las contraseñas no coinciden", aceptable: false});
            }
            else {
                this.setState({errorRepitaContrasena: ""});
            }
        });
    }

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <DialogTitle>Cambiar contraseña</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        La contraseña debe tener como mínimo 6 caracteres.<br />
                        Recomendamos que utilice mayúsculas, minúsculas, números y símbolos.
                    </DialogContentText>
                    <TextField
                        autoFocus={true}
                        type="password"
                        id="contrasenaActual"
                        label="Contraseña actual"
                        fullWidth={true}
                        value={this.state.contrasenaActual}
                        onChange={this.inputHandler}
                    />
                    <TextField
                        type="password"
                        id="nuevaContrasena"
                        label="Nueva contraseña"
                        fullWidth={true}
                        helperText={this.state.errorNuevaContrasena}
                        error={this.state.errorNuevaContrasena !== ""}
                        value={this.state.nuevaContrasena}
                        onChange={this.inputHandler}
                    />
                    <TextField
                        type="password"
                        id="repitaContrasena"
                        label="Repita la nueva contraseña"
                        fullWidth={true}
                        helperText={this.state.errorRepitaContrasena}
                        error={this.state.errorRepitaContrasena !== ""}
                        value={this.state.repitaContrasena}
                        onChange={this.inputHandler}
                    />
                    <DialogActions>
                        <Button onClick={this.props.onClose} color="default">
                            Cancelar
                        </Button>
                        <Button
                            onClick={() => this.props.cambiarContrasena(this.state.contrasenaActual, this.state.nuevaContrasena)}
                            color="primary"
                            disabled={!this.state.aceptable}
                        >
                            Aceptar
                            {this.props.cargando && <CircularProgress size={24} />}
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        )
    }
}

const mapStateToProps = state => {
    return {
        mostrarDialog: state.cambiarContrasena.mostrarDialog,
        cargando: state.cambiarContrasena.cargando,
        exito: state.cambiarContrasena.exito,
        error: state.cambiarContrasena.error,
        textoDeError: state.cambiarContrasena.textoDeError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cambiarContrasena: (contrasenaActual, contrasenaNueva) => {dispatch(cambiarContrasena(contrasenaActual, contrasenaNueva))},
        abrirDialogCambiarContrasena: () => {dispatch(abrirDialogCambiarContrasena())},
        cerrarDialogCambiarContrasena: () => {dispatch(cerrarDialogCambiarContrasena())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CambiarContrasena);