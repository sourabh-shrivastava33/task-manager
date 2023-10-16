class CustomApiErrorHandler extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

const createCustomError = (msg, statusCode) => {
	return new CustomApiErrorHandler(msg, statusCode);
};

module.exports = { createCustomError, CustomApiErrorHandler };
