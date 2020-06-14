import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, TextField } from "@material-ui/core";

class Filtro extends Component {
    state ={
        estado: [],
        desde: null,
        hasta: null,
        dni: null,
    }

    render() {
        return (
            <Dialog {...props}>
                <DialogTitle>Filtrar multas</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <FormLabel>Estado</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="primary" name="noResueltas" />}
                                label="No resueltas"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" name="aceptadas" />}
                                label="Aceptadas"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" name="rechazadas" />}
                                label="Rechazadas"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Fecha de creación</FormLabel>
                        <FormGroup>
                            <TextField id="desde" label="Desde" type="date" />
                            <TextField id="hasta" label="Hasta" type="date" />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Otros</FormLabel>
                        <FormGroup>
                            <TextField id="dni" label="DNI" />
                        </FormGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.borrar}>Borrar filtros</Button>
                    <Button onClick={props.onClose}>Cancelar</Button>
                    <Button onClick={props.aplicar} color="primary">Aceptar</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default Filtro;