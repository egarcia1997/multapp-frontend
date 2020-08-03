import React, { Component } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, CircularProgress } from "@material-ui/core";
import { eliminarUsuario } from "../../store/actions/eliminarUsuario";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Notifier from "../Notifier/Notifier";

class EliminarUsuario extends Component {
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <DialogTitle>
                    Eliminar usuario
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Está seguro de que desea eliminar a {this.props.nombre} (id {this.props.id})?
                        Esta acción no se puede deshacer.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose}>Cancelar</Button>
                    <Button color="primary" onClick={() => this.props.eliminarUsuario(this.props.id)}>
                        Eliminar
                        {this.props.cargando && <CircularProgress size={24} />}
                    </Button>
                </DialogActions>
                <Notifier />
            </Dialog>
        )
    }
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