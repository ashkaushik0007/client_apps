var express = require('express');
var router = express.Router();
var saleService = require('../../services/sales.service');
 
// routes
router.post('/add', add);
router.post('/getAll', getAll);
router.put('/update', update);
router.delete('/:_id', _delete);
 
module.exports = router;

function add(req, res) {
    saleService.add(req.body)
        .then(function () {
            res.status(200).send(req.body);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    saleService.getAll(req.body._id)
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function update(req, res) {
    saleService.update(req.body._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function _delete(req, res) {
    saleService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}