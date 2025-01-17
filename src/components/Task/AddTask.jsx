import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import TaskList from "./TaskList";

export default function AddTask() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");

  const handleChangeInput = (e) => setInputData(e.target.value);

  const handleAddTask = () => {
    if (!inputData.trim()) {
      setError(true);
      setErrorDescription("Task name cannot be empty");
      return;
    }
    setData([
      ...data,
      { id: Date.now(), name: inputData, isCompleted: false },
    ]);
    setInputData("");
    setError(false);
    setErrorDescription("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask()
    }
  }
  const toggleCompletion = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleDelete = (id) => setData(data.filter((item) => item.id !== id));

  const handleDeleteAll = () => setData([]);

  const handleEdit = (id, currentName) => {
    setEditId(id);
    setNewName(currentName);
  };

  const handleSave = (id) => {
    if (!newName.trim()) {
      setError(true);
      setErrorDescription("Task name cannot be empty");
      return;
    }
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
    setEditId(null);
    setNewName("");
  };

  return (
    <Box p={2} maxWidth="500px" mx="auto">
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Task Manager
        </Typography>
        <Stack direction="row" spacing={2} mb={2}>
          <TextField
            label="New Task"
            value={inputData}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
            error={error}
            helperText={error ? errorDescription : ""}
            fullWidth
          />
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddTask}
          >
            Add
          </Button>
        </Stack>
        {data.length > 0 && (
          <Box mb={2}>
            <Button
              variant="contained"
              color="error"
              startIcon={<Delete />}
              onClick={handleDeleteAll}
              fullWidth
            >
              Delete All
            </Button>
          </Box>
        )}
        <Divider />
        <Stack spacing={2} mt={2}>
          {data.length === 0 && (
            <Typography variant="body1" color="textSecondary">
              No tasks yet. Add a task to get started!
            </Typography>
          )}
          <TaskList data={data} toggleCompletion={toggleCompletion} editId={editId} newName={newName} setNewName={setNewName} handleSave={handleSave} handleEdit={handleEdit} handleDelete={handleDelete} />
        </Stack>
      </Paper>
    </Box>
  );
}
