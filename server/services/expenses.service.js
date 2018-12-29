var config = require('../../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('expenses');
db.bind('users');

var service = {};

service.getAll = getAll;
service.add = add;
service.update = update;
service.delete = _delete;
 
module.exports = service;
 
function add(expenseParam) {

    var deferred = Q.defer();       

    db.expenses.insert(
        expenseParam,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });
 
    return deferred.promise;
}
 
//Get Data of owner
function getAll(_id) {
    var deferred = Q.defer(); 
     
    db.expenses.find({ owner: _id }).toArray(function (err, expenses) {
        if (err) deferred.reject(err.name + ': ' + err.message);
  
        deferred.resolve(expenses);
    });
 
    return deferred.promise;
}
 
function update(_id, expenseParam) {
    var deferred = Q.defer();
 
    // fields to update
    var set = {
        date: expenseParam.date,
        cleaning: expenseParam.cleaning,     
        coffee: expenseParam.coffee,
        belending: expenseParam.belending,
        loadingUnloading: expenseParam.loadingUnloading,
        packingTailoring: expenseParam.packingTailoring,
        plasticGunny: expenseParam.plasticGunny,
        ebBill: expenseParam.ebBill,
        salaryExpense: expenseParam.salaryExpense,
        houseRentExpense: expenseParam.houseRentExpense,
        moneyTransferExpense: expenseParam.moneyTransferExpense,
        otherExpense: expenseParam.otherExpense,
        updated: Date.now()             
    };

    db.expenses.update(
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
 
    db.expenses.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });

    return deferred.promise;
}