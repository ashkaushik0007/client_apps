var config = require('../../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('documents');
db.bind('users');

var service = {};

service.getAll = getAll;
service.add = add;
service.update = update;
service.delete = _delete;
 
module.exports = service;
 
function add(documentParam) {

    var deferred = Q.defer();       

    db.documents.insert(
        documentParam,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });
 
    return deferred.promise;
}
 
//Get Data of owner
function getAll(_id) {
    var deferred = Q.defer(); 
     
    db.documents.find({ owner: _id }).toArray(function (err, documents) {
        if (err) deferred.reject(err.name + ': ' + err.message);
  
        deferred.resolve(documents);
    });
 
    return deferred.promise;
}
 
function update(_id, documentParam) {
    var deferred = Q.defer();
 
    // fields to update
    var set = {
        type: documentParam.type,
        name: documentParam.name,     
        number: documentParam.number,
        vehicleCategory: documentParam.vehicleCategory,
        dob: documentParam.dob,
        fatherName: documentParam.fatherName,
        owner: documentParam.owner,
        updated: Date.now()             
    };

    db.documents.update(
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
 
    db.documents.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });

    return deferred.promise;
}