import React, { Component } from "react";
import { Button, TextField, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl, Grid, DialogContentText, Select, MenuItem, InputLabel, Typography, IconButton, InputAdornment, Input } from "@material-ui/core";
import { Edit } from '@material-ui/icons';
import { DropzoneArea } from "material-ui-dropzone";

class Usuario extends Component {
    state = {
        rol: {
            value: "",
            edit: false,
        },
        dni: {
            value: "",
            edit: false,
        },
        apellido: {
            value: "Pérez",
            edit: false,
        },
        nombre: {
            value: "",
            edit: false,
        },
        fechaNacimiento: {
            value: "",
            edit: false,
        },
        sexo: {
            value: "",
            edit: false,
        },
        calle: {
            value: "",
            edit: false,
        },
        numero: {
            value: "",
            edit: false,
        },
        piso: {
            value: "",
            edit: false,
        },
        departamento: {
            value: "",
            edit: false,
        },
        localidad: {
            value: "",
            edit: false,
        },
        provincia: {
            value: "",
            edit: false,
        },
        email: {
            value: "",
            edit: false,
        },
        foto: {
            value: "",
            edit: false,
        },
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
    
    // carga el radio que selecciona el usuario en el state
    radioHandler = (event) => {
        this.setState({sexo: event.target.value});
    }

    // carga lo que selecciona el usuario en el select en el state
    selectHandler = (event) => {
        this.setState({rol: event.target.value});
    }

    // carga la foto subida en el state
    imageUploadHandler = (files) => {
        this.setState({foto: files}, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    <Typography>Datos del usuario {this.props.id}</Typography>
                    <FormControl required={true} fullWidth={true}>
                        <InputLabel>Rol</InputLabel>
                        <Select id="rol" value={this.state.rol} onChange={this.selectHandler}>
                            <MenuItem value="administrador">Administrador</MenuItem>
                            <MenuItem value="inspector">Inspector</MenuItem>
                            <MenuItem value="supervisor">Supervisor</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
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
                            endAdornment={
                                <InputAdornment>
                                    <IconButton>
                                        <Edit />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <TextField
                            id="apellido"
                            type="text"
                            label="Apellido"
                            required={true}
                            value={this.state.apellido.value}
                            disabled={!this.state.apellido.edit}
                            onChange={this.inputHandler}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <Edit />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
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
                        <FormLabel component="legend">Sexo</FormLabel>                                
                        <RadioGroup value={this.state.sexo} onChange={this.radioHandler}>
                            <FormControlLabel value="masculino" label="Masculino" control={<Radio color="primary" />} />
                            <FormControlLabel value="femenino" label="Femenino" control={<Radio color="primary" />} />
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
                        <FormLabel>Cuenta</FormLabel>
                        <TextField
                            id="email"
                            type="email"
                            label="Correo electrónico"
                            required={true}
                            value={this.state.email}
                            onChange={this.inputHandler}
                        />
                        <FormLabel component="legend">Foto</FormLabel>
                        <DropzoneArea
                            dropzoneText="No se cargó foto"
                            acceptedFiles={["image/*"]}
                            filesLimit={1}
                            onChange={this.imageUploadHandler.bind(this)}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        )
    }
}

export default Usuario;