import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, TextField, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { setFiltros, clearFiltros, cerrarDialogFiltro } from "../../store/actions/filtro";

const Filtro = props => {
    const [noResueltas, setNoResueltas] = useState(true);
    const [aceptadas, setAceptadas] = useState(true);
    const [rechazadas, setRechazadas] = useState(true);
    const [desde, setDesde] = useState("2020-01-01");
    const [hasta, setHasta] = useState(new Date().toISOString().slice(0, 10));
    const [dni, setDni] = useState("");

    useEffect(() => {
        props.setFiltros({
            noResueltas: props.noResueltas,
            aceptadas: props.aceptadas,
            rechazadas: props.rechazadas,
            desde: props.desde,
            hasta: props.hasta,
            dni: props.dni,
        });
    }, []);

    const clearFiltros = () => {
        setNoResueltas(true);
        setAceptadas(true);
        setRechazadas(true);
        setDesde("2020-01-01");
        setHasta(new Date().toISOString().slice(0, 10));
        setDni("");
        props.clearFiltros();
    }

    return (
        <Dialog open={props.mostrarDialog} onClose={props.cerrarDialogFiltro}>
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
                                            checked={noResueltas}
                                            onChange={() => setNoResueltas(prevState => !prevState)}
                                        />}
                                    label="No resueltas"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            id="aceptadas"
                                            checked={aceptadas}
                                            onChange={() => setAceptadas(prevState => !prevState)}
                                        />}
                                    label="Aceptadas"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            id="rechazadas"
                                            checked={rechazadas}
                                            onChange={() => setRechazadas(prevState => !prevState)}
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
                                    value={desde}
                                    onChange={event => setDesde(event.target.value)}
                                />
                                <TextField
                                    id="hasta"
                                    label="Hasta"
                                    type="date"
                                    value={hasta}
                                    onChange={event => setHasta(event.target.value)}
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
                                    value={dni}
                                    onChange={event => setDni(event.target.value)}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={clearFiltros}>Borrar filtros</Button>
                <Button onClick={props.cerrarDialogFiltro}>Cancelar</Button>
                <Button onClick={() => props.setFiltros({noResueltas, aceptadas, rechazadas, desde, hasta, dni})} color="primary">Aceptar</Button>
            </DialogActions>
        </Dialog>
    );
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