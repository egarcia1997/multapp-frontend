import { Avatar, Collapse, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Tooltip } from "@material-ui/core";
import { Add, Delete, DirectionsCar, Edit, Save, Cancel } from "@material-ui/icons";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Fragment } from "react";

const MarcaDeVehiculos = props => {
    const [show, setShow] = useState(false);
    const [showAddModelo, setShowAddModelo] = useState(false);
    const [showEditarMarca, setShowEditarMarca] = useState(false);
    const [modelToEdit, setModelToEdit] = useState(null);
    const [editingValue, setEditingValue] = useState('');

    const onCancelEdit = () => {
        setModelToEdit(null);
        setShowEditarMarca(false);
        setEditingValue('');
    };

    const onToggleEdit = modelo => {
        onCancelEdit();
        setModelToEdit(modelo);
        setEditingValue(modelo);
    };

    const onToggleEditMarca = () => {
        onCancelEdit();
        setShowEditarMarca(true);
        setEditingValue(props.vehiculo.marca);
    };

    const onEditMarca = () => {
        const { id, ...rest } = props.vehiculo;
        props.onUpdateMarca(id, {
            ...rest,
            marca: editingValue
        });
    }

    const onAddModelo = () => {
        const { id, ...rest } = props.vehiculo;
        props.onUpdateMarca(id, {
            ...rest,
            modelos: [...rest.modelos, editingValue]
        });
    };

    const onEditModelo = () => {
        const { id, ...rest } = props.vehiculo;
        const indexToReplace = rest.modelos.findIndex(m => m === modelToEdit);
        const newModelos = [...rest.modelos];
        newModelos[indexToReplace] = editingValue;
        props.onUpdateMarca(id, {
            ...rest,
            modelos: newModelos
        });
    };

    const onDeleteModelo = modelo => {
        const { id, ...rest } = props.vehiculo;
        props.onUpdateMarca(id, {
            ...rest,
            modelos: rest.modelos.filter(m => m !== modelo)
        });
    };

    return (
        <Fragment>
            <ListItem button onClick={() => setShow(!show)}>
                <ListItemAvatar>
                    <Avatar>
                        <DirectionsCar />
                    </Avatar>
                </ListItemAvatar>
                {showEditarMarca ? (
                    <TextField
                        size="small"
                        value={editingValue}
                        onChange={e => setEditingValue(e.target.value)}
                    />
                ) : (
                    <ListItemText
                        primary={props.vehiculo.marca}
                        secondary={`${props.vehiculo.modelos.length} modelos`}
                    />
                )}
                <ListItemSecondaryAction>
                    {/* <Tooltip title="Agregar modelo">
                        <IconButton onClick={onAddModelo}>
                            <Add />
                        </IconButton>
                    </Tooltip> */}
                    {showEditarMarca ? (
                        <>
                        <Tooltip title="Guardar">
                            <IconButton onClick={onEditMarca}>
                                <Save />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Cancelar">
                            <IconButton onClick={onCancelEdit}>
                                <Cancel />
                            </IconButton>
                        </Tooltip>
                    </>
                    ) : (
                        <Tooltip title="Editar nombre de la marca">
                            <IconButton onClick={onToggleEditMarca}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Tooltip title="Borrar marca">
                        <IconButton onClick={props.onDeleteMarca}>
                            <Delete onClick={props.onDeleteMarca} />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={show}>
                <List>
                    {props.vehiculo.modelos.map(modelo => (
                        <ListItem>
                            {modelToEdit === modelo ? (
                                <TextField
                                    size="small"
                                    value={editingValue}
                                    onChange={e => setEditingValue(e.target.value)}
                                />
                            ) : <ListItemText primary={modelo} />}
                            <ListItemSecondaryAction>
                                {modelToEdit === modelo ? (
                                    <>
                                        <Tooltip title="Guardar">
                                            <IconButton onClick={onEditModelo}>
                                                <Save />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Cancelar">
                                            <IconButton onClick={onCancelEdit}>
                                                <Cancel />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                ) : (
                                    <Tooltip title="Editar modelo">
                                        <IconButton onClick={() => onToggleEdit(modelo)}>
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                )}
                                <Tooltip title="Borrar modelo">
                                    <IconButton onClick={() => onDeleteModelo(modelo)}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Button variant="text" startIcon={<Add />}>
                    Agregar modelo
                </Button>
            </Collapse>
        </Fragment>
    );
};

export default MarcaDeVehiculos;