// Controller: cuida da comunicação (entender o pedido HTTP, devolver resposta HTTP)
const taskService = require("../services/task.service");

function listTasks(req, res) {
    const tasks = taskService.listTasks();
    res.status(200).json(tasks);
}

function createTask(req, res) {
    try {
        const newTask = taskService.createTask(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
}

function getTaskById(req, res) {
    try {
        const id = Number(req.params.id);
        const task = taskService.getTaskById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
}

function updateTask(req, res) {
    try {
        const id = Number(req.params.id);
        const updatedTask = taskService.updateTask(id, req.body);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
}

function toggleTaskStatus(req, res) {
    try {
        const id = Number(req.params.id);
        const updatedTask = taskService.toggleTaskStatus(id);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
}

function deleteTask(req, res) {
    try {
        const id = Number(req.params.id);
        taskService.deleteTask(id);
        res.status(200).json({ message: "Tarefa removida com sucesso" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
}

module.exports = {
  listTasks,
  createTask,
  getTaskById,
  updateTask,
  toggleTaskStatus,
  deleteTask,
};
