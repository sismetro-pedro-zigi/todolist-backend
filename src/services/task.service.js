const taskRepository = require("../repositories/task.repository");

function listTasks() {
    return taskRepository.findAll();
}

function getTaskById(id) {
    const task = taskRepository.findById(id);

    if (!task) {
        const error = new Error("Tarefa não encontrada");
        error.statusCode = 404;
        throw error;
    }

    return task;
}

function createTask(taskData) {

    if (!taskData.title || taskData.title.trim() === "") {
        const error = new Error("O título da tarefa é obrigatório");
        error.statusCode = 400;
        throw error;
    }

    return taskRepository.create({
        title: taskData.title,
        description: taskData.description,
    })
}

function updateTask(id, data) {
    const task = taskRepository.findById(id);

    if (!task) {
        const error = new Error("Tarefa não encontrada");
        error.statusCode = 404;
        throw error;
    }

    if (data.title !== undefined && data.title.trim() === "") {
        const error = new Error("O título da tarefa não pode ser vazio");
        error.statusCode = 400;
        throw error;
    }

    return taskRepository.update(id, data);
}

function toggleTaskStatus(id) {
    const task = taskRepository.findById(id);

    if (!task) {
        const error = new Error("Tarefa não encontrada");
        error.statusCode = 404;
        throw error;
    }

    return taskRepository.update(id, { completed: !task.completed });
}

function deleteTask(id) {
    const removed = taskRepository.remove(id);

    if (!removed) {
        const error = new Error("Tarefa não encontrada");
        error.statusCode = 404;
        throw error;
    }
}

module.exports = {
  listTasks,
  getTaskById,
  createTask,
  updateTask,
  toggleTaskStatus,
  deleteTask,
};