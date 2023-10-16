const express = require("express");
const {
	getAllTasks,
	createTask,
	getOneTask,
	updateTask,
	deleteTask,
} = require("../controller/tasks");
const router = express.Router();
router.route("/api/v1/tasks").get(getAllTasks).post(createTask);

router
	.route("/api/v1/tasks/:id")
	.get(getOneTask)
	.patch(updateTask)
	.delete(deleteTask);
module.exports = router;
