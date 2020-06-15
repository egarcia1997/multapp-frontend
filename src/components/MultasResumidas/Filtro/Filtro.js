import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, TextField } from "@material-ui/core";

class Filtro extends Component {
    state = {
        noResueltas: true,
        aceptadas: true,
        rechazadas: true,
        desde: "2020-01-01",
        hasta: new Date().toISOString().slice(0, 10),
        dni: "",
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value}, () => {console.log(this.state);});
    }
    
    // carga los checkbox que selecciona el usuario en el state
    checkboxHandler = (event) => {
        this.setState({[event.target.id]: event.target.checked}, () => {console.log(this.state);});
    }

    // metodo para borrar los filtros aplicados y mostrar todas las multas
    borrarFiltrosHandler = () => {
        // poner los controles como esta el estado
        this.setState({
            noResueltas: true,
            aceptadas: true,
            rechazadas: true,
            desde: "2020-01-01",
            hasta: new Date().toISOString().slice(0, 10),
            dni: "",
        });
    }

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <DialogTitle>Filtrar multas</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <FormLabel>Estado</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        id="noResueltas"
                                        checked={this.state.noResueltas}
                                        onChange={this.checkboxHandler}
                                    />}
                                label="No resueltas"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        id="aceptadas"
                                        checked={this.state.aceptadas}
                                        onChange={this.checkboxHandler}
                                    />}
                                label="Aceptadas"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        id="rechazadas"
                                        checked={this.state.rechazadas}
                                        onChange={this.checkboxHandler}
                                    />}
                                label="Rechazadas"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Fecha de creación</FormLabel>
                        <FormGroup>
                            <TextField
                                id="desde"
                                label="Desde"
                                type="date"
                                value={this.state.desde}
                                onChange={this.inputHandler}
                            />
                            <TextField
                                id="hasta"
                                label="Hasta"
                                type="date"
                                value={this.state.hasta}
                                onChange={this.inputHandler}
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Otros</FormLabel>
                        <FormGroup>
                            <TextField
                                id="dni"
                                label="DNI"
                                type="number"
                                value={this.state.dni}
                                onChange={this.inputHandler}
                            />
                        </FormGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.borrarFiltrosHandler}>Borrar filtros</Button>
                    <Button onClick={this.props.onClose}>Cancelar</Button>
                    <Button onClick={() => this.props.aplicar(this.state)} color="primary">Aceptar</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default Filtro;