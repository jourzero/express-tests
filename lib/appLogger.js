const winston     = require('winston');
const appRoot     = require('app-root-path');
const config      = require('../config.js');
const os          = require('os');

// Requiring `winston-syslog` exposes `winston.transports.Syslog`
require('winston-syslog').Syslog;

// define the custom settings for each transport (file, console)
const options = {
  file: {
    format: winston.format.json(),
    //format: winston.format.printf(info => `${new Date().toISOString(), ${info.message}`),
    level: 'info',
    handleExceptions: true,
    json: true,
    colorize: false,
    maxsize: 5242880, // 5MB
    maxFiles: 2,
    filename: `${appRoot}/logs/app.log`,
  },
  console: {
    format: winston.format.simple(),
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  },
  syslog: {
    app_name: config.appName, // The name of the application (Default: process.title).
    format: winston.format.json(),
    level: 'info',
    host: "localhost",        // The host running syslogd, defaults to localhost.
    port: "514" ,             // The port on the host that syslog is running on, defaults to syslogd's default port.
    protocol: "udp4",         // The network protocol to log over (e.g. tcp4, udp4, unix, unix-connect, etc).
    localhost: os.hostname(), // Host to indicate that log messages are coming from (Default: localhost).
    path: "/dev/log",         // The path to the syslog dgram socket (i.e. /dev/log or /var/run/syslog for OS X).
    //facility: "local0",     // Syslog facility to use (Default: local0).
    //type: "BSD",            // The type of the syslog protocol to use (Default: BSD, also valid: 5424).
    //pid: process.pid,       // PID of the process that log messages are coming from (Default process.pid).
    //eol: 0                  // The end of line character to be added to the end of the message (Default: Message without modifications).
  },
};

const logger = winston.createLogger({
  transports: [
    //new winston.transports.Syslog(options.syslog),
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file)
  ]
});

module.exports = logger;
