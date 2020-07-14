import React, { Component, Fragment } from "react";
import Logo from "../../components/Logo/Logo";
import { Box, Container, Typography, FormControl, TextField, Button, Grid, Paper } from "@material-ui/core";

class Login extends Component {
    state = {
        mostrarIniciarSesion: true,
        contrasenaIncorrecta: false,
        cuentaBloqueada: false,
    }

    // metodo para hacer el login
    loginHandler = () => {
        // mandar al server usuario y contraseña
        // si es incorrecto hacer visible el div de clase estilos.Error
        // si es correcto hacer un if
        //     si el usuario es un supervisor cargar el componente LayoutSupervisor
        //     si el usuario es un administrador cargar el componente LayoutAdministrador
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
                                <Grid item={true} xs={12}>
                                    <FormControl fullWidth>
                                        <TextField type="email" label="Correo electrónico" />
                                        <TextField type="password" label="Contraseña" />
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