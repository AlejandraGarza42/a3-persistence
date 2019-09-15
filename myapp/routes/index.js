var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', {title: 'Log Hours'});
});

module.exports = router;

/*something random I wrote
var express = require('express');
var users = require('./users');
var router = express.Router();

express.static('./users');

module.exports = router;
*/
