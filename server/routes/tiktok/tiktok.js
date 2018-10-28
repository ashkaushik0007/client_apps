var config = require('./../../../config.json');
var express = require('express');
var router = express.Router();
var tiktokService = require('./../../services/tiktok.service');
 
// routes
router.post('/getfeed', tiktokfeed);
 
module.exports = router;

function tiktokfeed(req, res) {
    tiktokService.get(req.body)
        .then(function (feed) {
            res.status(200).send(feed);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}           