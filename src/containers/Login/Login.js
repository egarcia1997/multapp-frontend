import React, { Component, Fragment } from "react";
import Logo from "../../components/Logo/Logo";
import { Box, Container, Typography, FormControl, TextField, Button, Grid, Paper } from "@material-ui/core";
import Axios from "axios";

class Login extends Component {
    state = {
        email: "",
        contrasena: "",
        mostrarIniciarSesion: true,
        contrasenaIncorrecta: false,
        error: "",
    }

    // metodo para hacer el login
    loginHandler = () => {
        const data = {
            email: this.state.email,
            password: this.state.contrasena,
            returnSecureToken: true,
        }
        const headers = {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
        Axios.post("aca meto el endpoint del backend que se va a hacer despues", data, headers)
            .then(response => {
                console.log(response);
                // localStorage.setItem("idToken", response.data.idToken);
                // localStorage.setItem("expirationDate", response.data.expiresIn);
                // localStorage.setItem("localId", response.data.localId);
            }).catch(error => {
                console.log(error.response.data.error.message)
                switch (error.response.data.error.message) {
                    case "INVALID_PASSWORD":
                        this.setState({error: "La contraseña es incorrecta"});
                        break;
                    case "EMAIL_NOT_FOUND":
                        this.setState({error: "El correo electrónico no está cargado en nuestros sistemas"});
                        break;
                    case "INVALID_EMAIL":
                        this.setState({error: "El correo electrónico ingresado no es válido"});
                        break;
                    case "USER_DISABLED":
                        this.setState({error: "Su cuenta fue bloqueada. Contacte con un administrador"});
                        break;
                    default:
                        this.setState({error: "Ocurrió un error. Intente nuevamente"});
                }
            });
    }

    // metodo para mostrar el cuadro de recuperar contraseña
    olvidarContrasenaHandler = () => {
        this.setState({mostrarIniciarSesion: false});
    }

    // metodo para recuperar la contraseña
    recuperarContrasenaHandler = () => {
        // aca va el codigo para mandar el mail
    }

    // metood para volver a mostrar el cuadro de iniciar sesión
    cancelarOlvidoHandler = () => {
        this.setState({mostrarIniciarSesion: true});
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <Container>
                <Grid
                    container={true}
                    spacing={0}
                    alignContent="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item={true} xs={3}>
                        <Paper elevation={3} style={{padding: "8px"}}>
                            <Grid container={true} spacing={1} direction="column">
                                <Grid item={true} xs={12}>
                                    <Logo width={100} height={100} />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Typography align="center">Iniciar sesión en MultApp</Typography>
                                </Grid>
                                {this.state.error !== "" ?
                                    <Grid item={true} xs={12}>
                                        <Typography align="center" variant="body2" color="error">
                                            {this.state.error}
                                        </Typography>
                                    </Grid>
                                : null}
                                <Grid item={true} xs={12}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="email"
                                            type="email"
                                            label="Correo electrónico"
                                            value={this.state.email}
                                            onChange={this.inputHandler}
                                        />
                                        <TextField
                                            id="contrasena"
                                            type="password"
                                            label="Contraseña"
                                            value={this.state.contrasena}
                                            onChange={this.inputHandler}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Button fullWidth ={true} variant="contained" color="primary" onClick={this.loginHandler}>Iniciar sesión</Button>
                                    <Button fullWidth={true} color="primary" onClick={this.olvidarContrasenaHandler}>Olvidé mi contraseña</Button>
                                </Grid>
                                <Grid item={true}></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Login;