const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${uuid()}\t${dateTime}\t${message}\n`;

    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem);
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.header.origin}`, 'reqLog.log');
    console.log(req.method, req.path);
    next();
}

module.exports = { logEvents, logger};