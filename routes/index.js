const express = require("express");
const router = express.Router();
const logger = require("../lib/appLogger.js");

/* GET home page. */
router.get("/", function(req, res, next) {
    logger.debug("Rendering /");
    //res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
    res.cookie("goodguys", "john", { domain: "goodguys.com", path: "/" });
    //res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.cookie("rememberme", "1", {
        sameSite: "Strict",
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    });
    res.render("index", {
        title: "Express Tests",
        repoUrl: "https://github.com/jourzero/express-tests"
    });
});

module.exports = router;
