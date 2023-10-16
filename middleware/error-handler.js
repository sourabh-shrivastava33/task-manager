const { CustomApiErrorHandler } = require("../errors/customErrorHandler");

const errorHandlerMiddleWare = (err, req, res, next) => {
	if (err instanceof CustomApiErrorHandler) {
		return res.status(err.statusCode).json({ msg: err.message });
	}
	return res.status(500).json({ msg: err });
};
module.exports = errorHandlerMiddleWare;
