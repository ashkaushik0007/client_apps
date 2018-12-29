var config = require('../../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('sales');
db.bind('users');

var service = {};

service.getAll = getAll;
service.add = add;
service.update = update;
service.delete = _delete;
 
module.exports = service;
 
function add(saleParam) {

    var deferred = Q.defer();      
    
    db.sales.insert(
        saleParam,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });
 
    return deferred.promise;
}
 
//Get Data of owner
function getAll(_id) {
    var deferred = Q.defer(); 
     
    db.sales.find({ owner: _id }).toArray(function (err, sales) {
        if (err) deferred.reject(err.name + ': ' + err.message);
  
        deferred.resolve(sales);
    });
 
    return deferred.promise;
}
 
function update(_id, saleParam) {
    var deferred = Q.defer();
 
    // fields to update
    var set = {
        auctionName: saleParam.auctionName,
        dealerName: saleParam.companyName,     
        date: saleParam.date,
        qty: saleParam.qty,
        recievedAmount: saleParam.costAmount,
        dueAmount: saleParam.dueAmount,
        updated: Date.now()             
    };

    db.sales.update(
        { _id: mongo.helper.toObjectID(_id) },
        { $set: set },
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message); 
            deferred.resolve();
        });
 
    return deferred.promise;
}

function _delete(_id) {

    var deferred = Q.defer();
 
    db.sales.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });

    return deferred.promise;
}