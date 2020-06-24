import React, { Component } from "react";
import { Box, Container, Typography, Tabs, Tab } from "@material-ui/core";

class Usuarios extends Component {
    state = {
        pestanaActual: 0,
    }

    // esta funcion fue copiada de la pagina de https://material-ui.com/components/tabs/#simple-tabs
    // porque importar TabPanel de @material-ui/lab NO ANDA
    TabPanel = (props) => {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
                )}
            </div>
        );
    }
  
    tabChangeHandler = (event, newValue) => {
        this.setState({pestanaActual: newValue});
    }
    
    render() {
        return (
            <Container maxWidth="lg">
                <Tabs value={this.state.pestanaActual} centered={true} onChange={this.tabChangeHandler} indicatorColor="primary" textColor="primary">
                    <Tab label="Inspectores" />
                    <Tab label="Supervisores" />
                    <Tab label="Administradores" />
                    <Tab label="Multados" />
                </Tabs>
                <this.TabPanel value={this.state.pestanaActual} index={0}>
                    Coso de inspectores
                </this.TabPanel>
                <this.TabPanel value={this.state.pestanaActual} index={1}>
                    Coso de supervisores
                </this.TabPanel>
                <this.TabPanel value={this.state.pestanaActual} index={2}>
                    Coso de administradores
                </this.TabPanel>
                <this.TabPanel value={this.state.pestanaActual} index={3}>
                    Coso de multados
                </this.TabPanel>
            </Container>
        );
    }
}

export default Usuarios;