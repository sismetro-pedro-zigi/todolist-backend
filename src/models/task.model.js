function createTaskModel({ id, title, description, completed }) {
    return {
        id,
        title,
        description: description || "",
        completed: completed || false,
    }
}

module.exports = { createTaskModel };