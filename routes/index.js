const express = require('express');
const router = express.Router();
const logger  = require('../lib/appLogger.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.debug("Rendering /");
  res.render('index', { title: 'Express' });
});

module.exports = router;
