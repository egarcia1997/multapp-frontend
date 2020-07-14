import React, { Component, Fragment } from "react";
import Logo from "../../components/Logo/Logo";
import { Container, Typography, FormControl, TextField, Button, Grid, Paper } from "@material-ui/core";
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
                sessionStorage.setItem("idToken", response.data.idToken);
                sessionStorage.setItem("expirationDate", response.data.expiresIn);
                sessionStorage.setItem("localId", response.data.localId);
                // esta solucion NO ME GUSTA, pero no se me ocurre otra mejor (capaz usando redux)
                window.location.reload();
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

    // metodo para mostrar/ocultar el cuadro de recuperar contraseña
    olvidarContrasenaHandler = () => {
        const nuevoEstado = !this.state.mostrarIniciarSesion;
        this.setState({mostrarIniciarSesion: nuevoEstado});
    }

    // metodo para recuperar la contraseña
    recuperarContrasenaHandler = () => {
        // aca va el codigo para mandar el mail
    }

    // carga lo que escribe el usuario en el state
    inputHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const iniciarSesion = (
            <Fragment>
                <Grid item={true} xs={12}>
                    <Typography align="center">Iniciar sesión en MultApp</Typography>
                </Grid>
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
            </Fragment>
        );
        const recuperarContrasena = (
            <Fragment>
                <Grid item={true} xs={12}>
                    <Typography align="center">
                        Si no recuerda su contraseña, ingrese su correo electrónico y le enviaremos una nueva para que pueda iniciar sesión
                    </Typography>
                </Grid>
                <Grid item={true} xs={12}>
                    <FormControl fullWidth={true}>
                        <TextField
                            id="email"
                            type="email"
                            label="Correo electrónico"
                            value={this.state.email}
                            onChange={this.inputHandler}
                        />
                    </FormControl>
                </Grid>
                <Grid item={true} xs={12}>
                    <Button fullWidth ={true} variant="contained" color="primary" onClick={this.loginHandler}>Recuperar contraseña</Button>
                    <Button fullWidth={true} color="primary" onClick={this.olvidarContrasenaHandler}>Cancelar</Button>
                </Grid>
            </Fragment>
        );
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
                                {this.state.error !== "" ?
                                    <Grid item={true} xs={12}>
                                        <Typography align="center" variant="body2" color="error">
                                            {this.state.error}
                                        </Typography>
                                    </Grid>
                                : null}
                                {this.state.mostrarIniciarSesion ? iniciarSesion : recuperarContrasena}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Login;