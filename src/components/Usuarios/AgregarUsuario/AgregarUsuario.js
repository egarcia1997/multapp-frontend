import React, { Component } from "react";
import { Dialog, DialogTitle } from "@material-ui/core";

class AgregarUsuario extends Component {
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <DialogTitle></DialogTitle>
            </Dialog>
        )
    }
}

export default AgregarUsuario;