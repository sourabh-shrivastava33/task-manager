const moongose = require("mongoose");
const taskSchema = moongose.Schema({
	name: {
		type: String,
		required: [true, "Must provide name"],
		trim: true,
		maxLength: [20, "name cannot be more than 20 characters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});
const task = moongose.model("task", taskSchema);
module.exports = task;
