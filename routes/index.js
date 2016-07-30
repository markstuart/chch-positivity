var express = require('express');
var router = express.Router();

var dataSet = [
  {
    date: '2010-06-01 00:00:00',
    positive: 62,
    negative: 31
  },
  {
    date: '2012-06-01 00:00:00',
    positive: 52,
    negative: 42
  },
  {
    date: '2014-06-01 00:00:00',
    positive: 55,
    negative: 30
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'How\'s Christchurch Feeling?',
    data: JSON.stringify(dataSet)
  });
});

module.exports = router;
