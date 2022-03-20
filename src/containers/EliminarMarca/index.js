import React from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import useStyles from "../../share/useStyles";
import { connect } from "react-redux";
import { eliminarMarca } from "./actions";

const EliminarMarca = props => {
    const estilos = useStyles();

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Eliminar marca</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ¿Está seguro de que desea eliminar la marca {props.marca} y todos sus modelos? Esta acción no se puede deshacer.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancelar</Button>
                <Button color="primary" disabled={props.cargando} onClick={() => props.eliminarMarca(props.id)}>
                    Eliminar
                    {props.cargando && <CircularProgress size={24} className={estilos.buttonProgress} />}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    mostrarDialog: state.eliminarMarca.mostrarDialog,
    cargando: state.eliminarMarca.cargando,
    exito: state.eliminarMarca.exito,
    error: state.eliminarMarca.error,
    textoDeError: state.eliminarMarca.textoDeError,
});

const mapDispatchToProps = dispatch => ({
    eliminarMarca: id => dispatch(eliminarMarca(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EliminarMarca);