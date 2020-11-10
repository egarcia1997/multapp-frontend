import React from "react";
import { ButtonBase, makeStyles } from "@material-ui/core";
import { ZoomIn } from "@material-ui/icons";

// esto esta basado en https://material-ui.com/components/buttons/#complex-buttons
// aunque hice varios cambios
const CustomImagePreview = props => {
    const estilos = useStyles();

    return (
        <div className={estilos.container}>
            {props.uris.map(uri => (
                <ButtonBase
                    key={uri}
                    className={estilos.buttonBase}
                    onClick={() => window.open(uri, "_blank")}
                >
                    <img src={uri} className={estilos.image} />
                    <span className={estilos.backdrop} />
                    <span className={estilos.button}>
                        <ZoomIn fontSize="large" style={{ fill: 'white' }} />
                    </span>
                </ButtonBase>
            ))}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    buttonBase: {
        margin: 2,
        "&:hover": {
            "& $backdrop": {
                opacity: 0.25,
            },
            "& $button": {
                opacity: 1,
            }
        }
    },
    image: {
        width: 100,
        height: 100,
        zIndex: 1,
    },
    backdrop: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "black",
        opacity: 0,
        zIndex: 2,
    },
    button: {
        position: "absolute",
        opacity: 0,
        zIndex: 3,
    },
}));

export default CustomImagePreview;