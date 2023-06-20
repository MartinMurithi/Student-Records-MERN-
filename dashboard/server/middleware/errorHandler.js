const { logEvents } = require("./logger");

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name} : ${err.message}\t${req.method}\t${req.url}\t${req.header.origin}`,
    "errLog.log"
  );
  console.log(err.stack);
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
  });

  next();
};

module.exports = errorHandler;
