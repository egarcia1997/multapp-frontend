import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, CircularProgress } from "@material-ui/core";
import useStyles from "../../share/useStyles";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import Notifier from "../Notifier/Notifier";
import { resolverMulta, cerrarDialogResolver } from "../../store/actions/resolverMulta";

const ResolverMulta = props => {
    const [razon, setRazon] = useState("");
    const estilos = useStyles();
    const accionConMayuscula = props.accion === "aceptar" ? "Aceptar" : "Rechazar";
    const accionParaMandarAlBack = props.accion === "aceptar" ? "Aceptada" : "Rechazada";

    return (
        <Dialog open={props.mostrarDialog} onClose={props.cerrarDialogResolver}>
            <DialogTitle>
                {accionConMayuscula} multa
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ¿Está seguro de que quiere {props.accion} esta multa?. Debe brindar una razón.
                </DialogContentText>
                <TextField
                    id="razon"
                    label={`Razón para ${props.accion} la multa`}
                    multiline={true}
                    rows={4}
                    fullWidth={true}
                    value={razon}
                    onChange={event => setRazon(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.cerrarDialogResolver()}>Cancelar</Button>
                <Button
                    color="primary"
                    disabled={razon.trim() === "" || props.cargando}
                    onClick={() => props.resolverMulta(props.id, accionParaMandarAlBack, razon)}
                >
                    {accionConMayuscula} multa
                    {props.cargando && <CircularProgress size={24} className={estilos.buttonProgress} />}
                </Button>
            </DialogActions>
            <Notifier />
        </Dialog>
    )
}

const mapStateToProps = state => {
    return {
        id: state.multa.multa.id,
        mostrarDialog: state.resolverMulta.mostrarDialog,
        cargando: state.resolverMulta.cargando,
        exito: state.resolverMulta.exito,
        error: state.resolverMulta.error,
        textoDeError: state.resolverMulta.textoDeError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cerrarDialogResolver: () => dispatch(cerrarDialogResolver()),
        resolverMulta: (id, estado, razon) => dispatch(resolverMulta(id, estado, razon)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(ResolverMulta));