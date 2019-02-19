const express = require("express");
const router = express.Router();
const logger = require("../lib/appLogger.js");

const context = {
    title: "First Post",
    story: {
        intro: "Jump Story",
        body: "Before the jump... After the jump..."
    }
};

/* GET test1 page. */
router.get("/", function(req, res, next) {
    logger.debug("Rendering /test1");
    res.render("test1", context);
});

module.exports = router;
