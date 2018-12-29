var express = require('express');
var router = express.Router();
var reportsService = require('../../services/reports.service');
 
// routes
router.get('/getConsolidateReports', getConsolidateReports);
 
module.exports = router;
 
function getConsolidateReports(req, res) {
    reportsService.getConsolidateReports()
        .then(function (reports) {
            res.send(reports);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}