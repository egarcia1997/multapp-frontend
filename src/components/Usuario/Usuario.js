import React, { Component, Fragment } from "react";
import { Button, TextField, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl, Grid, DialogContentText, Select, MenuItem, InputLabel, Typography, IconButton, InputAdornment, Input, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Container, CircularProgress, Tooltip, Fab, createMuiTheme } from "@material-ui/core";
import { Edit, Contacts, Email, Fingerprint, Event, Wc, Phone, LocationCity, Home, LocationOn } from '@material-ui/icons';
import { DropzoneArea } from "material-ui-dropzone";
import { connect } from "react-redux";
import { cargarUsuario } from "../../store/actions/usuario";

class Usuario extends Component {
    state = {
        rol: "",
        dni: "",
        apellido: "",
        nombre: "",
        fechaNacimiento: "",
        sexo: "",
        calle: "",
        numero: "",
        piso: "",
        departamento: "",
        localidad: "",
        provincia: "",
        email: "",
        foto: "",
    }

    componentDidMount = () => {
        const id = this.props.location.pathname.concat("").split("/")[2];
        this.props.cargarUsuario(id);
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        const nuevoEstado = {
            ...this.state[event.target.id],
            value: event.target.value,
        }
        this.setState({[event.target.id]: nuevoEstado});
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

    editHandler = (control) => {
        const nuevoEstado = {
            ...this.state[control],
            edit: !this.state[control].edit,
        };
        this.setState({[control]: nuevoEstado});
    }

    render() {
        const theme = createMuiTheme();

        return (
            <Container>
                {this.props.cargando ? <CircularProgress /> : null}
                {!this.props.cargando && !this.props.errorAlCargar ?
                    <Fragment>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12}>
                                <Avatar style={{width: "200px", height: "200px"}} src={this.state.imagen} alt={this.state.nombre} />
                            </Grid>
                            <Grid item={true} xs={12} style={{verticalAlign: "center"}}>
                                <Typography variant="h2">
                                    {this.props.usuario.apellido + " " + this.props.usuario.nombre}
                                </Typography>
                                <Typography variant="h4">{this.props.usuario.rol}</Typography>
                            </Grid>
                            <Grid item={true} xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Email />
                                        </ListItemIcon>
                                        <ListItemText primary="Correo electrónico" secondary={this.props.usuario.email} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <Fingerprint />
                                        </ListItemIcon>
                                        <ListItemText primary="DNI" secondary={this.props.usuario.dni} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <Event />
                                        </ListItemIcon>
                                        <ListItemText primary="Fecha de nacimiento" secondary={this.props.usuario.fechaNacimiento} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <Wc />
                                        </ListItemIcon>
                                        <ListItemText primary="Sexo" secondary={this.props.usuario.sexo} />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Grid>
                            <Grid item={true}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Phone />
                                        </ListItemIcon>
                                        <ListItemText primary="Teléfono" secondary={this.props.usuario.telefono} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <Home />
                                        </ListItemIcon>
                                        <ListItemText primary="Dirección" secondary={this.props.usuario.calle + " " + this.props.usuario.numero} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocationCity />
                                        </ListItemIcon>
                                        <ListItemText primary="Localidad" secondary={this.props.usuario.localidad} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocationOn />
                                        </ListItemIcon>
                                        <ListItemText primary="Provincia" secondary={this.props.usuario.provincia} />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Grid>
                            {/* <Grid item={true} xs={12}>
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
                                    <Grid container spacing={1}>
                                        <Grid item xs={10}>
                                            <TextField
                                                id="dni"
                                                type="number"
                                                label="DNI"
                                                fullWidth
                                                required={true}
                                                value={this.state.dni.value}
                                                disabled={!this.state.dni.edit}
                                                onChange={this.inputHandler}
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton onClick={() => this.editHandler("dni")}>
                                                <Edit />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
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
                            </Grid> */}
                        </Grid>
                        <Tooltip title="Editar datos" placement="left" arrow>
                            <Fab color="primary" onClick={void(0)} style={{position: "fixed", bottom: theme.spacing(5), right: theme.spacing(5)}}>
                                <Edit />
                            </Fab>
                        </Tooltip>
                    </Fragment>
                : null}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        usuario: state.usuario.usuario,
        cargando: state.usuario.cargando,
        errorAlCargar: state.usuario.errorAlCargar,
        textoDeErrorAlCargar: state.usuario.textoDeErrorAlCargar,
        estadoCambiado: state.usuario.estadoCambiado,
        errorAlModificarDatos: state.usuario.errorAlModificarDatos,
        textoDeErrorAlModificarDatos: state.usuario.textoDeErrorAlModificarDatos,    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cargarUsuario: (id) => {dispatch(cargarUsuario(id))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuario);