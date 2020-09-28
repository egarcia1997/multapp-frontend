import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, CircularProgress } from "@material-ui/core";
import { cambiarContrasena, abrirDialogCambiarContrasena, cerrarDialogCambiarContrasena } from "../../store/actions/cambiarContrasena";
import useStyles from "../../share/useStyles";

const CambiarContrasena = props => {
    const [contrasenaActual, setContrasenaActual] = useState("");
    const [nuevaContrasena, setNuevaContrasena] = useState("");
    const [repitaContrasena, setRepitaContrasena] = useState("");
    const [errorNuevaContrasena, setErrorNuevaContrasena] = useState("");
    const [errorRepitaContrasena, setErrorRepitaContrasena] = useState("");
    const [aceptable, setAceptable] = useState(false);

    const estilos = useStyles();

    // pone todos los inputs en blanco al cerrar el dialog
    useEffect(() => {
        setContrasenaActual("");
        setNuevaContrasena("");
        setRepitaContrasena("");
        setErrorNuevaContrasena("");
        setErrorRepitaContrasena("");
        setAceptable(false);
    }, [props.mostrarDialog]);

    // controla si se cumplen las condiciones para cambiar la contraseña
    useEffect(() => {
        if (contrasenaActual !== "" && nuevaContrasena !== "" && repitaContrasena !== "") {
            setAceptable(true);
        }
        if (contrasenaActual === nuevaContrasena) {
            setErrorNuevaContrasena("La nueva contraseña es igual a la actual");
            setAceptable(false);
        }
        else {
            if (nuevaContrasena.length < 6) {
                setErrorNuevaContrasena("La contraseña debe tener 6 o más caracteres");
                setAceptable(false);
            }
            else {
                setErrorNuevaContrasena("");
            }
        }
        if (nuevaContrasena !== repitaContrasena) {
            setErrorRepitaContrasena("Las contraseñas no coinciden");
            setAceptable(false);
        }
        else {
            setErrorRepitaContrasena("");
        }
    }, [contrasenaActual, nuevaContrasena, repitaContrasena]);
    
    return (
        <Dialog open={props.open} onClose={props.onClose}>
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
                    value={contrasenaActual}
                    onChange={event => setContrasenaActual(event.target.value)}
                />
                <TextField
                    type="password"
                    id="nuevaContrasena"
                    label="Nueva contraseña"
                    fullWidth={true}
                    helperText={errorNuevaContrasena}
                    error={errorNuevaContrasena !== ""}
                    value={nuevaContrasena}
                    onChange={event => setNuevaContrasena(event.target.value)}
                />
                <TextField
                    type="password"
                    id="repitaContrasena"
                    label="Repita la nueva contraseña"
                    fullWidth={true}
                    helperText={errorRepitaContrasena}
                    error={errorRepitaContrasena !== ""}
                    value={repitaContrasena}
                    onChange={event => setRepitaContrasena(event.target.value)}
                />
                <DialogActions>
                    <Button onClick={props.onClose} color="default">
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => props.cambiarContrasena(contrasenaActual, nuevaContrasena)}
                        color="primary"
                        disabled={!aceptable || props.cargando}
                    >
                        Aceptar
                        {props.cargando && <CircularProgress size={24} className={estilos.buttonProgress} />}
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
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