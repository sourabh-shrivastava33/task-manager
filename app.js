require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");
app.use(express.static("./public"));
app.use(express.json());
// Routes

app.use("/", tasks);

app.use(notFound);
app.use(errorHandlerMiddleWare);

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server is listening to port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};
start();
