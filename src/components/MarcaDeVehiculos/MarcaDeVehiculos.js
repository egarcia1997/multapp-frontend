import { Avatar, Collapse, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { Delete, DirectionsCar } from "@material-ui/icons";
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
                    <IconButton>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={show}>
                <List>
                    {props.modelos.map(modelo => (
                        <ListItem>
                            <ListItemText primary={modelo} />
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </Fragment>
    )
}

export default MarcaDeVehiculos;