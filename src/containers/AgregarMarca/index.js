import React, { useState } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import useStyles from "../../share/useStyles";
import { connect } from "react-redux";
import { agregarMarca } from "./actions";

const AgregarMarca = props => {
    const [marca, setMarca] = useState("");
    const [modelos, setModelos] = useState("");
    const estilos = useStyles();

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Agregar marca</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Debe proveer el nombre de la marca. Puede especificar una lista de modelos separados por comas.
                </DialogContentText>
                <TextField
                    label="Nombre"
                    fullWidth
                    required
                    value={marca}
                    onChange={event => setMarca(event.target.value)}
                />
                <TextField
                    label="Modelos"
                    fullWidth
                    multiline
                    value={modelos}
                    onChange={event => setModelos(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancelar</Button>
                <Button color="primary" disabled={props.cargando || marca.trim() === ""} onClick={() => props.agregarMarca(marca, modelos)}>
                    Agregar
                    {props.cargando && <CircularProgress size={24} className={estilos.buttonProgress} />}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    mostrarDialog: state.agregarMarca.mostrarDialog,
    cargando: state.agregarMarca.cargando,
    exito: state.agregarMarca.exito,
    error: state.agregarMarca.error,
    textoDeError: state.agregarMarca.textoDeError,
});

const mapDispatchToProps = dispatch => ({
    agregarMarca: (marca, modelos) => dispatch(agregarMarca(marca, modelos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AgregarMarca);