const express = require("express");
const taskController = require("../controllers/task.controller");

const router = express.Router();

router.get("/", taskController.listTasks);
router.post("/", taskController.createTask);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTask);
router.patch("/:id/toggle", taskController.toggleTaskStatus);
router.delete("/:id", taskController.deleteTask);

module.exports = router;