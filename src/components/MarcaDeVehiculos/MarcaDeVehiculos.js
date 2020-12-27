import { Avatar, Collapse, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Tooltip } from "@material-ui/core";
import { Add, Delete, DirectionsCar } from "@material-ui/icons";
import React, { useState } from "react";
import { Fragment } from "react";

const MarcaDeVehiculos = props => {
    const [show, setShow] = useState(false);

    return (
        <Fragment>
            <ListItem button onClick={() => setShow(!show)}>
                <ListItemAvatar>
                    <Avatar src={props.logo}>
                        <DirectionsCar />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.marca} secondary={`${props.modelos.length} modelos`} />
                <ListItemSecondaryAction>
                    <Tooltip title="Agregar modelo">
                        <IconButton onClick={props.onAddModelo}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Borrar marca">
                        <IconButton onClick={props.onDeleteMarca}>
                            <Delete onClick={props.onDeleteMarca} />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={show}>
                <List>
                    {props.modelos.map(modelo => (
                        <ListItem>
                            <ListItemText primary={modelo} />
                            <ListItemSecondaryAction>
                                <Tooltip title="Borrar modelo">
                                    <IconButton onClick={props.onDeleteModelo}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </Fragment>
    )
}

export default MarcaDeVehiculos;