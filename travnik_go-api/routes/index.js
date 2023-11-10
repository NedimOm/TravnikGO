var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proba', function(req, res, next) {
  res.send("Radi ko sat!");
});

module.exports = router;
