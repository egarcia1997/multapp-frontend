import React, { Component } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@material-ui/core";

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
                    <Button color="primary">Eliminar</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default EliminarUsuario;