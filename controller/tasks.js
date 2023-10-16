const Task = require("../models/Task");
const asyncWrapper = require("../middleware/asyncWrapper");
const {
	createCustomError,
	CustomApiErrorHandler,
} = require("../errors/customErrorHandler");
const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json({ tasks });
});
const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.json({ success: true, data: { task } });
});
const getOneTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOne({ _id: taskId });

	if (!task) {
		const error = createCustomError(`No task with  ${taskId}`, 404);

		return next(error);
	}
	res.status(200).json({ task });
});
const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOneAndDelete({ _id: taskId });
	if (!task) {
		return next(createCustomError(`No task with id ${taskId} `, 404));
		// return res.status(404).json({ msg: `No task with id ${taskId}` });
	}
	res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return next(createCustomError(`No task with id ${taskId} `, 404));
	}
	res.status(200).json({ task });
});
module.exports = {
	getAllTasks,
	createTask,
	getOneTask,
	updateTask,
	deleteTask,
};
