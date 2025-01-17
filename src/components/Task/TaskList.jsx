import React from "react";
import {
    TextField,
    Typography,
    Box,
    Checkbox,
    IconButton,
} from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";

export default function TaskList({ data, toggleCompletion, editId, newName, setNewName, handleSave, handleEdit, handleDelete }) {
    return (
        <>
            {data.map((item) => (
                <Box
                    key={item.id}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    border={1}
                    borderRadius={2}
                    borderColor="grey.300"
                    p={1}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <Checkbox
                            checked={item.isCompleted}
                            onChange={() => toggleCompletion(item.id)}
                            color="primary"
                        />
                        {editId === item.id ? (
                            <TextField
                                size="small"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                fullWidth
                            />
                        ) : (
                            <Typography
                                variant="body1"
                                sx={{
                                    textDecoration: item.isCompleted
                                        ? "line-through"
                                        : "none",
                                    color: item.isCompleted ? "text.secondary" : "text.primary",
                                }}
                            >
                                {item.name}
                            </Typography>
                        )}
                    </Box>
                    <Box>
                        {editId === item.id ? (
                            <IconButton
                                color="primary"
                                onClick={() => handleSave(item.id)}
                            >
                                <Save />
                            </IconButton>
                        ) : (
                            <IconButton
                                color="primary"
                                onClick={() => handleEdit(item.id, item.name)}
                            >
                                <Edit />
                            </IconButton>
                        )}
                        <IconButton color="error" onClick={() => handleDelete(item.id)}>
                            <Delete />
                        </IconButton>
                    </Box>
                </Box>
            ))}</>
    )
}