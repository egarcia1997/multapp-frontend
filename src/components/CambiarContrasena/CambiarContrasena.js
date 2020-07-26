import React, { Component } from "react";
import { connect } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@material-ui/core";

class CambiarContrasena extends Component {
    render() {
        return (
            <Dialog open={this.state.cambiarContrasena} onClose={this.cerrarDialog}>
                <DialogTitle>Cambiar contraseña</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        La contraseña debe tener como mínimo 6 caracteres.<br />
                        Recomendamos que utilice mayúsculas, minúsculas, números y símbolos.
                    </DialogContentText>
                    <TextField autoFocus={true} type="password" label="Contraseña actual" fullWidth={true} />
                    <TextField type="password" label="Nueva contraseña" fullWidth={true} />
                    <TextField type="password" label="Repita la nueva contraseña" fullWidth={true} />
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
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CambiarContrasena);