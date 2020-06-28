import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl, Grid, DialogContentText } from "@material-ui/core";

class AgregarUsuario extends Component {
    state = {
        dni: "",
        apellido: "",
        nombre: "",
        fechaNacimiento: new Date().toISOString().slice(0, 10),
        sexo: "masculino",
        calle: "",
        numero: "",
        piso: "",
        departamento: "",
        localidad: "",
        provincia: "",
        foto: null,
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
    
    // carga el radio que selecciona el usuario en el state
    radioHandler = (event) => {
        this.setState({sexo: event.target.value});
    }

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
                                <TextField
                                    id="dni"
                                    type="number"
                                    label="DNI"
                                    required={true}
                                    value={this.state.dni}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="apellido"
                                    type="text"
                                    label="Apellido"
                                    required={true}
                                    value={this.state.apellido}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="nombre"
                                    type="text"
                                    label="Nombre"
                                    required={true}
                                    value={this.state.nombre}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="fechaNacimiento"
                                    type="date"
                                    label="Fecha de nacimiento"
                                    required={true}
                                    value={this.state.fechaNacimiento}
                                    onChange={this.inputHandler}
                                />
                                <FormLabel>Sexo</FormLabel>
                                <RadioGroup value={this.state.sexo} onChange={this.radioHandler}>
                                    <FormControlLabel value="masculino" label="Masculino" control={<Radio />} />
                                    <FormControlLabel value="femenino" label="Femenino" control={<Radio />} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <FormControl fullWidth={true}>
                                <FormLabel>Dirección</FormLabel>
                                <TextField
                                    id="calle"
                                    type="text"
                                    label="Calle"
                                    required={true}
                                    value={this.state.calle}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="numero"
                                    type="number"
                                    label="Número"
                                    value={this.state.numero}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="piso"
                                    type="text"
                                    label="Piso"
                                    value={this.state.piso}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="departamento"
                                    type="text"
                                    label="Departamento"
                                    value={this.state.departamento}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="localidad"
                                    type="text"
                                    label="Localidad"
                                    required={true}
                                    value={this.state.localidad}
                                    onChange={this.inputHandler}
                                />
                                <TextField
                                    id="provincia"
                                    type="text"
                                    label="Provincia"
                                    required={true}
                                    value={this.state.provincia}
                                    onChange={this.inputHandler}
                                />
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
                    <Button onClick={this.agregarUsuario} color="primary">Agregar</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default AgregarUsuario;