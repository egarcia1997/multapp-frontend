import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, TextField, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { setFiltros, clearFiltros, cerrarDialogFiltro } from "../../store/actions/filtro";

class Filtro extends Component {
    state = {
        noResueltas: null,
        aceptadas: null,
        rechazadas: null,
        desde: null,
        hasta: null,
        dni: null,
    }

    componentDidMount = () => {
        this.setState({
            noResueltas: this.props.noResueltas,
            aceptadas: this.props.aceptadas,
            rechazadas: this.props.rechazadas,
            desde: this.props.desde,
            hasta: this.props.hasta,
            dni: this.props.dni,
        });
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
    
    // carga los checkbox que selecciona el usuario en el state
    checkboxHandler = (event) => {
        this.setState({[event.target.id]: event.target.checked});
    }

    render() {
        return (
            <Dialog open={this.props.mostrarDialog} onClose={this.props.cerrarDialogFiltro}>
                <DialogTitle>Filtrar multas</DialogTitle>
                <DialogContent>
                    <Grid container={true} spacing={2}>
                        <Grid item={true}>
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
                        </Grid>
                        <Grid item={true}>
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
                        </Grid>
                        <Grid item={true}>
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
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.clearFiltros}>Borrar filtros</Button>
                    <Button onClick={this.props.cerrarDialogFiltro}>Cancelar</Button>
                    <Button onClick={() => this.props.setFiltros(this.state)} color="primary">Aceptar</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = state => {
    return {
        mostrarDialog: state.filtro.mostrarDialog,
        noResueltas: state.filtro.noResueltas,
        aceptadas: state.filtro.aceptadas,
        rechazadas: state.filtro.rechazadas,
        desde: state.filtro.desde,
        hasta: state.filtro.hasta,
        dni: state.filtro.dni,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cerrarDialogFiltro: () => dispatch(cerrarDialogFiltro()),
        setFiltros: filtros => dispatch(setFiltros(filtros)),
        clearFiltros: () => dispatch(clearFiltros()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtro);