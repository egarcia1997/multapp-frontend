import React, { Component } from "react";
import { Container, Tabs, Tab } from "@material-ui/core";

class Usuarios extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Tabs centered={true} indicatorColor="primary" textColor="primary">
                    <Tab label="Inspectores" />
                    <Tab label="Supervisores" />
                    <Tab label="Administradores" />
                    <Tab label="Multados" />
                </Tabs>
            </Container>
        );
    }
}

export default Usuarios;