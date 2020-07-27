import React, { Component } from "react";
import { connect } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@material-ui/core";
import { cambiarContrasena, abrirDialogCambiarContrasena, cerrarDialogCambiarContrasena } from "../../store/actions/cambiarContrasena";

class CambiarContrasena extends Component {
    state = {
        nuevaContrasena: "",
        repitaContrasena: "",
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
        if (event.target.id === "nuevaContrasena") {
            if (event.target.length < 6) {
                event.target.error = true;
                event.target.helperText = "La contraseña debe tener 6 o más caracteres";
            }
        }
        if (event.target.id === "repitaContrasena") {
            if (this.state.nuevaContrasena !== this.state.repitaContrasena) {
                event.target.error = true;
                event.target.helperText = "Las contraseñas no coinciden";
            }
        }
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
                    <TextField autoFocus={true} type="password" label="Contraseña actual" fullWidth={true} />
                    <TextField
                        type="password"
                        id="nuevaContrasena"
                        label="Nueva contraseña"
                        fullWidth={true}
                        helperText=""
                        value={this.state.nuevaContrasena}
                        onChange={this.inputHandler}
                    />
                    <TextField
                        type="password"
                        id="repitaContrasena"
                        label="Repita la nueva contraseña"
                        fullWidth={true}
                        helperText=""
                        value={this.state.repitaContrasena}
                        onChange={this.inputHandler}
                    />
                    <DialogActions>
                        <Button onClick={this.cerrarDialog} color="default">
                            Cancelar
                        </Button>
                        <Button onClick={this.cerrarDialog} color="primary">
                            Aceptar
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