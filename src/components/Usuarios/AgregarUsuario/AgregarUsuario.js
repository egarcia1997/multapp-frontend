import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl, Grid, DialogContentText, Select, MenuItem, InputLabel } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { connect } from "react-redux";
import { crearUsuario } from "../../../store/actions/agregarUsuario";
import { withSnackbar } from "notistack";

class AgregarUsuario extends Component {
    state = {
        rol: "",
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
        email: "",
        foto: [],
    }

    componentDidUpdate = () => {
        if (this.props.error) {
            this.props.enqueueSnackbar(this.props.textoDeError.toString(), {variant: "error"});
        }
        if (this.props.exito) {
            this.props.enqueueSnackbar("Usuario creado con éxito", {variant: "success"});
        }
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

    agregarUsuarioHandler = () => {
        const usuario = {
            ...this.state,
        };
        delete usuario.foto;
        this.props.crearUsuario(usuario, this.state.foto[0]);
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
                        <Grid item={true} xs={12}>
                            <FormControl required={true} fullWidth={true}>
                                <InputLabel>Rol</InputLabel>
                                <Select id="rol" value={this.state.rol} onChange={this.selectHandler}>
                                    <MenuItem value="Administrador">Administrador</MenuItem>
                                    <MenuItem value="Inspector">Inspector</MenuItem>
                                    <MenuItem value="Supervisor">Supervisor</MenuItem>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose}>Cancelar</Button>
                    <Button onClick={this.agregarUsuarioHandler} color="primary">Agregar</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const mapStateToProps = state => {
    return {
        cargando: state.agregarUsuario.cargando,
        exito: state.agregarUsuario.exito,
        error: state.agregarUsuario.error,
        textoDeError: state.agregarUsuario.textoDeError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        crearUsuario: (usuario, foto) => {dispatch(crearUsuario(usuario, foto))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(AgregarUsuario));