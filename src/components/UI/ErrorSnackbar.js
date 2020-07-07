import React from "react";
import { Snackbar, Button } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorSnackbar = props => (
    <Snackbar open={props.open} onClose={props.onClose}>
        <Alert severity="error" action={
            <Button color="primary" onClick={() => window.location.reload()}>Recargar</Button>
        }>
            {props.message}
        </Alert>
    </Snackbar>
);

export default ErrorSnackbar;