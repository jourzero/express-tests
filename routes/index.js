const express = require("express");
const router = express.Router();
const logger = require("../lib/appLogger.js");

/* GET home page. */
router.get("/", function(req, res, next) {
    logger.debug("Rendering /");
    res.render("index", {
        title: "Express Tests",
        repoUrl: "https://github.com/jourzero/express-tests"
    });
});

module.exports = router;
