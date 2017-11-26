var config = require('./../../../config.json');
var express = require('express');
var router = express.Router();
var companyService = require('./../../services/user.service');
var companyService = require('./../../services/company.service');
 
// routes
router.post('/register', register);
router.get('/getAllCompanies', getAll);
router.get('/current', getCurrent);
router.put('/update', update);
router.delete('/:_id', _delete);
router.post('/verify',verifyUser);
 
module.exports = router;

function register(req, res) {
    companyService.create(req.body)
        .then(function () {
            res.status(200).send(req.body);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
 
function verifyUser(req, res) {
    companyService.verify(req.body)
        .then(function () {
            res.status(200).send(req.body);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    companyService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getCurrent(req, res) {
    companyService.getById(req.user.sub)
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
    companyService.update(req.body._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function _delete(req, res) {
    companyService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}