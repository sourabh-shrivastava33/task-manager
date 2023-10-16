const moongose = require("mongoose");

const connectDb = (uri) => {
	return moongose.connect(uri, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});
};
module.exports = connectDb;
