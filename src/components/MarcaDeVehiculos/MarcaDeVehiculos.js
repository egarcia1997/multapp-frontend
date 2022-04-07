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
        setShowAddModelo(false);
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

    const onToggleAddMarca = () => {
        onCancelEdit();
        setShowAddModelo(true);
    };

    const onEditMarca = () => {
        const { id, ...rest } = props.vehiculo;
        props.onUpdateMarca(id, {
            ...rest,
            marca: editingValue
        });
        onCancelEdit();
    }

    const onAddModelo = () => {
        const { id, ...rest } = props.vehiculo;
        props.onUpdateMarca(id, {
            ...rest,
            modelos: [...rest.modelos, editingValue]
        });
        onCancelEdit();
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
        onCancelEdit();
    };

    const onDeleteModelo = modelo => {
        const { id, ...rest } = props.vehiculo;
        props.onUpdateMarca(id, {
            ...rest,
            modelos: rest.modelos.filter(m => m !== modelo)
        });
        onCancelEdit();
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
                        autoFocus
                    />
                ) : (
                    <ListItemText
                        primary={props.vehiculo.marca}
                        secondary={`${props.vehiculo.modelos.length} modelos`}
                    />
                )}
                <ListItemSecondaryAction>
                    {showEditarMarca ? (
                        <>
                        <Tooltip title="Guardar">
                            <IconButton disabled={!editingValue} onClick={onEditMarca}>
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
                    {props.vehiculo.modelos.sort((a, b) => a.localeCompare(b)).map(modelo => (
                        <ListItem divider>
                            {modelToEdit === modelo ? (
                                <TextField
                                    size="small"
                                    value={editingValue}
                                    onChange={e => setEditingValue(e.target.value)}
                                    autoFocus
                                />
                            ) : <ListItemText primary={modelo} />}
                            <ListItemSecondaryAction>
                                {modelToEdit === modelo ? (
                                    <>
                                        <Tooltip title="Guardar">
                                            <IconButton disabled={!editingValue} onClick={onEditModelo}>
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
                    <ListItem>
                        {showAddModelo ? (
                            <>
                                <TextField
                                    size="small"
                                    value={editingValue}
                                    onChange={e => setEditingValue(e.target.value)}
                                    autoFocus
                                />
                                <ListItemSecondaryAction>
                                    <Tooltip title="Guardar">
                                        <IconButton disabled={!editingValue} onClick={onAddModelo}>
                                            <Save />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Cancelar">
                                        <IconButton onClick={onCancelEdit}>
                                            <Cancel />
                                        </IconButton>
                                    </Tooltip>
                                </ListItemSecondaryAction>
                            </>
                        ) : (
                            <Button variant="text" startIcon={<Add />} onClick={onToggleAddMarca}>
                                Agregar modelo
                            </Button>
                        )}
                    </ListItem>
                </List>
            </Collapse>
        </Fragment>
    );
};

export default MarcaDeVehiculos;