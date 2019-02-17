"use strict";
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const reqLogger = require("./lib/reqLogger.js");
//const morgan = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const app = express();

// Get Loggers
//const appLogger  = require('./lib/appLogger.js');
//const logger     = appLogger.loggers.get('local-logger');
//const siemLogger = appLogger.loggers.get('siem-logger');
const logger = require("./lib/appLogger.js");

logger.info("App starting...");
//siemLogger.info('Logging to SIEM');

// Use my request logger
//app.use(morgan('combined'));
app.use(reqLogger);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    logger.error(`UNKNOWN ROUTE ${req.originalUrl}`);
    next(createError(404));
    //  res.status(404).send("NOT FOUND");
    // render the error page
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    logger.error(
        `GENERAL ERROR! URL:${req.originalUrl}|ERROR:${
            err.message
        }|STACK:${err.stack}`
    );

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;

/*
app.get("/", (req, res) => {
    logger.info("Doing some processing...");
    logger.debug("Some fake step 1; starting");
    logger.debug("Some fake step 2; working");
    logger.debug("Some fake step 3; finished!");
    res.send("Winston server!");
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    logger.error(`GENERAL ERROR ${err.message}\n${err.stack}`);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8080, () => {
    logger.info("Ready at http://localhost:8080");
});
*/
