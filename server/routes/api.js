const express = require('express');
const router = express.Router();

//Routing
var user  = require('./routing/user.js');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* GET USER. */
router.get('/user', (req, res) => {
  res.send('user works');
});

module.exports = router;