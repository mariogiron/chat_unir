var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/chat', (req, res) => {
  // Recupero el username de las cookies
  const username = req.cookies['chat_username'];

  res.render('chat', { username });
});

router.post('/select-username', (req, res) => {
  res.cookie('chat_username', req.body.username);
  res.redirect('/chat');
});

module.exports = router;
