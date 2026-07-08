let tasks = [];
let nextId = 1;

function findAll() {
    return tasks;
}

function findById(id) {
    return tasks.find((task) => task.id === id);
}

function create(taskData) {
    const newTask = {
        id: nextId++,
        title: taskData.title,
        description: taskData.description || "",
        completed: false, 
    }

    tasks.push(newTask);
    return newTask;
}

function update(id, updateData) {
    const task = findById(id);
    if (!task) {
        return null;
    }

    Object.assign(task, updateData);
    return task;
}

function remove(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) {
        return false;
    }

    tasks.splice(index, 1);
    return true;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
}