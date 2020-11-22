import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";

class InspectorLogueado extends Component {
    render() {
        return (
            <Container>
                <Typography variant="h3">Utilice la aplicación móvil de MultApp</Typography>
                <Typography variant="h5">La aplicación web es sólo para Supervisores y Administradores</Typography>
            </Container>
        );
    }
}

export default InspectorLogueado;