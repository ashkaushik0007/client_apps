var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');
var userService = require('services/user.service');
 
// routes
router.put('/', test);
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/getAllUsers', getAll);
router.get('/current', getCurrent);
router.put('/:_id', update);
router.delete('/:_id', _delete);
router.post('/verify',verifyUser);
 
module.exports = router;
 
function authenticate(req, res) {
    userService.authenticate(req.body.mobile, req.body.password,req.body.role)
        .then(function (user) {
            if (user) {
                // authentication successful                
                 res.send(user);
            } else {
                // authentication failed
                res.status(401).send('Mobile number or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.status(200).send(req.body);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
 
function verifyUser(req, res) {
    userService.verify(req.body)
        .then(function () {
            res.status(200).send(req.body);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getCurrent(req, res) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function _delete(req, res) {
    userService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}