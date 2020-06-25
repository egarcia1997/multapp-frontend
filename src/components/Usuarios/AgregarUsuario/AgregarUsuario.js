import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl, Grid, DialogContentText } from "@material-ui/core";

class AgregarUsuario extends Component {
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} maxWidth="xl" fullWidth={true}>
                <DialogTitle>
                    Agregar un nuevo usuario
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>* Campos obligatorios</DialogContentText>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={4}>
                            <FormControl fullWidth={true}>
                                <FormLabel>Datos personales</FormLabel>
                                <TextField type="number" label="DNI" required={true} />
                                <TextField type="text" label="Apellido" required={true} />
                                <TextField type="text" label="Nombre" required={true} />
                                <TextField type="date" label="Fecha de nacimiento" required={true} />
                                <FormLabel>Sexo</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="masculino" label="Masculino" control={<Radio />} />
                                    <FormControlLabel value="femenino" label="Femenino" control={<Radio />} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <FormControl fullWidth={true}>
                                <FormLabel>Dirección</FormLabel>
                                <TextField type="text" label="Calle" required={true} />
                                <TextField type="number" label="Número" />
                                <TextField type="text" label="Piso" />
                                <TextField type="text" label="Departamento" />
                                <TextField type="text" label="Localidad" required={true} />
                                <TextField type="text" label="Provincia" required={true} />
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <FormControl fullWidth={true}>
                                <FormLabel>Foto</FormLabel>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose}>Cancelar</Button>
                    <Button color="primary">Agregar</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default AgregarUsuario;