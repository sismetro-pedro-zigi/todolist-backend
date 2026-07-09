const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, "..", "data", "tasks.json");

function readTasksFromFile() {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
}

function writeTasksToFile(tasks) {
    const fileContent = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(dataFilePath, fileContent, 'utf-8');
}

function findAll() {
    return readTasksFromFile();
}

function findById(id) {
    const tasks = readTasksFromFile();
    return tasks.find((task) => task.id === id);
}

function create(taskData) {
    const tasks = readTasksFromFile();

    const nextId = tasks.length > 0  ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

    const newTask = {
        id: nextId,
        title: taskData.title,
        description: taskData.description || "",
        completed: false,
    };

    tasks.push(newTask);
    writeTasksToFile(tasks);

    return newTask;
}

function update(id, updatedData) {
    const tasks = readTasksFromFile();
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return null;
    }

    Object.assign(task, updatedData);
    writeTasksToFile(tasks);

    return task;
}

function remove(id) {
    const tasks = readTasksFromFile();
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
        return false;
    }

    tasks.splice(index, 1);
    writeTasksToFile(tasks);

    return true;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
}

