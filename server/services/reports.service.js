var config = require('../../config.json');
var _ = require('lodash');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });

db.bind('sales');
db.bind('expenses');
db.bind('purchases');

var service = {};

service.getConsolidateReports = getConsolidateReports;
 
module.exports = service;
 
//Get consolidate reports
function getConsolidateReports() {
    var deferred = Q.defer(); 

    salesReport().then(function (salesReports) {
        purchasesReports().then(function (purchasesReports) {
          expensesReports().then(function (expensesReports) {
            var mergeSalesPurchaseKey = _.merge(_.keyBy(salesReports, '_id'), _.keyBy(purchasesReports, '_id'));

            var mergeSalesPurchaseJson = _.values(mergeSalesPurchaseKey);

            var finalReportsKey = _.merge(_.keyBy(mergeSalesPurchaseJson, '_id'), _.keyBy(expensesReports, '_id'));

            var finalReportsJson = _.values(finalReportsKey);

            deferred.resolve(finalReportsJson);
            
          })
          .catch(function (err) {
            deferred.reject(err.name + ': ' + err.message);
          });
        })
        .catch(function (err) {
          deferred.reject(err.name + ': ' + err.message);
        });
    })
    .catch(function (err) {
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function extend(target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
      for (var prop in source) {
          target[prop] = source[prop];
      }
  });
  return target;
}

function salesReport(){

  var deferred = Q.defer(); 

  db.collection('sales').aggregate([
    {
      "$group":  {
        _id: { 
          $month:{
            $dateFromString: { 
              dateString: "$date",
              format: "%m/%d/%Y"
            }
          } 
        }, 
        salesTotal: { 
            "$sum": { 
              "$sum": [ { "$toDouble": "$recievedAmount" }, { "$toDouble": "$dueAmount" }]                
            }
          }, 
        count:{
          "$sum" : 1
        }         
      }
    }],function(err, salesReports) {
      if (err) deferred.reject(err.name + ': ' + err.message);

      deferred.resolve(salesReports);    
    }); 

  return deferred.promise;
}

function purchasesReports(){

  var deferred = Q.defer(); 

  db.collection('purchases').aggregate([
    {
      "$group":  {
        _id: { 
          $month:{
            $dateFromString: { 
              dateString: "$date",
              format: "%m/%d/%Y"
            }
          } 
        }, 
        purchasesTotal: { 
            "$sum": { 
              "$sum": [ { "$toDouble": "$costAmount" }, { "$toDouble": "$dueAmount" }]                
            }
          }, 
        count:{
          "$sum" : 1
        }         
      }
    }],function(err, purchasesReports) {
      if (err) deferred.reject(err.name + ': ' + err.message);
      deferred.resolve(purchasesReports);    
    }); 

  return deferred.promise;
}

function expensesReports(){

  var deferred = Q.defer(); 

  db.collection('expenses').aggregate([
    {
      "$group":  {
        _id: { 
          $month:{
            $dateFromString: { 
              dateString: "$date",
              format: "%m/%d/%Y"
            }
          } 
        }, 
        expensesTotal: { 
            "$sum": { 
              "$sum": [
                        { "$toDouble": "$cleaning" }, 
                        { "$toDouble": "$coffee" }, 
                        { "$toDouble": "$belending" }, 
                        { "$toDouble": "$loadingUnloading" }, 
                        { "$toDouble": "$packingTailoring" }, 
                        { "$toDouble": "$plasticGunny" }, 
                        { "$toDouble": "$ebBill" }, 
                        { "$toDouble": "$salaryExpense" }, 
                        { "$toDouble": "$houseRentExpense" }, 
                        { "$toDouble": "$moneyTransferExpense" },
                        { "$toDouble": "$otherExpense" }
                      ]                
            }
          }, 
        count:{
          "$sum" : 1
        }         
      }
    }],function(err, expensesReports) {
      if (err) deferred.reject(err.name + ': ' + err.message);

      deferred.resolve(expensesReports);    
    }); 

  return deferred.promise;
}

function mergeJson(target) {
  for (var argi = 1; argi < arguments.length; argi++) {
      var source = arguments[argi];
      for (var key in source) {
          if (!(key in target)) {
              target[key] = [];
          }
          for (var i = 0; i < source[key].length; i++) {
              target[key].push(source[key][i]);
          }
      }
  }
  return target;
}
