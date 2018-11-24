var config = require('./../../../config.json');
var express = require('express');
var router = express.Router();
var AllVideoService = require('./../../services/AllVideo.service');
 
// routes
router.post('/getfeed', AllVideofeed);
 
module.exports = router;

function AllVideofeed(req, res) {
    AllVideoService.get(req.body)
        .then(function (feed) {
            res.status(200).send(feed);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}           