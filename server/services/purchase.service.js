var config = require('../../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('purchases');
db.bind('users');

var service = {};

service.getAll = getAll;
service.add = add;
service.update = update;
service.delete = _delete;
 
module.exports = service;
 
function add(purchaseParam) {

    var deferred = Q.defer();       

    db.purchases.insert(
        purchaseParam,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });
 
    return deferred.promise;
}
 
//Get Data of owner
function getAll(_id) {
    var deferred = Q.defer(); 
     
    db.purchases.find({ owner: _id }).toArray(function (err, purchases) {
        if (err) deferred.reject(err.name + ': ' + err.message);
  
        deferred.resolve(purchases);
    });
 
    return deferred.promise;
}
 
function update(_id, purchaseParam) {
    var deferred = Q.defer();
 
    // fields to update
    var set = {
        auctionName: purchaseParam.auctionName,
        companyName: purchaseParam.companyName,     
        date: purchaseParam.date,
        qty: purchaseParam.qty,
        costAmount: purchaseParam.costAmount,
        dueAmount: purchaseParam.dueAmount,
        updated: Date.now()             
    };

    db.purchases.update(
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
 
    db.purchases.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });

    return deferred.promise;
}