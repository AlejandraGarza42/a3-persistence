/* Original, dont want to delete just yet
var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) { 
  res.render('index', { title: 'Ale Website' });
});

module.exports = router;
*/
var express = require('./users');
var router = express.Router();

module.exports = router;