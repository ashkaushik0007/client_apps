var express = require('express');
var router = express.Router();
var reportsService = require('../../services/reports.service');
 
// routes
router.get('/getConsolidateReports', getConsolidateReports);
router.get('/gettotalsalesdue', gettotalsalesdue);
 
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

function gettotalsalesdue(req, res) {
    reportsService.getTotalSalesDueAmount()
        .then(function (totaldue) {
            res.send(totaldue);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}