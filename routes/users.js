const express = require("express");
const router = express.Router();
const logger = require("../lib/appLogger.js");

/* GET users listing. */
router.get("/", function(req, res, next) {
    logger.debug("Rendering /users");
    res.send("respond with a resource");
});

module.exports = router;
