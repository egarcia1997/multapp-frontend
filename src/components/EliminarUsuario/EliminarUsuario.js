import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, CircularProgress } from "@material-ui/core";
import { eliminarUsuario } from "../../store/actions/eliminarUsuario";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Notifier from "../Notifier/Notifier";
import useStyles from "../../share/useStyles";

const EliminarUsuario = props => {
    const estilos = useStyles();

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>
                Eliminar usuario
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ¿Está seguro de que desea eliminar a {props.nombre}?
                    Esta acción no se puede deshacer.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancelar</Button>
                <Button color="primary" disabled={props.cargando} onClick={() => props.eliminarUsuario(props.id)}>
                    Eliminar
                    {props.cargando && <CircularProgress size={24} className={estilos.buttonProgress} />}
                </Button>
            </DialogActions>
            <Notifier />
        </Dialog>
    );
}

const mapStateToProps = state => {
    return {
        id: state.eliminarUsuario.id,
        nombre: state.eliminarUsuario.nombre,
        cargando: state.eliminarUsuario.cargando,
        exito: state.eliminarUsuario.exito,
        error: state.eliminarUsuario.error,
        textoDeError: state.eliminarUsuario.textoDeError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        eliminarUsuario: (id) => {dispatch(eliminarUsuario(id))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(EliminarUsuario));