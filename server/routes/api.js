const express = require('express');
const router = express.Router();
const app = express();

//Routing
var user  = require('./routing/user.js');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* GET USER. */
app.use('/user', user);

module.exports = router;