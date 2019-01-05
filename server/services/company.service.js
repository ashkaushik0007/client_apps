var config = require('../../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('companies');
db.bind('users');

var service = {};

// service.verify = verify;
service.getAll = getAll;
// service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
 
module.exports = service;
 
function create(companyParam) {
    var deferred = Q.defer();
 
    // validation
    db.users.findOne(
        { email: companyParam.email },
        function (err, company) {
            if (err) deferred.reject(err.email + ': ' + err.message);
 
            if (company) {
                // email already exists
                deferred.reject('Email "' + companyParam.email + '" is already taken');
            } else {
                createuser();
            }
        });


    function createuser(){
        // set company object to companyParam without the cleartext password
        var user = _.omit(companyParam, ['name','type','email','traderegnumber','ownername','ownersurname','ownerphone','ownedBy','ownerpass','timetable']);;

        user.name = companyParam.ownername;
        user.surname = companyParam.ownersurname;
        user.active = true;
        user.phone = companyParam.ownerphone;
        // add hashed password to company object
        user.hash = bcrypt.hashSync(companyParam.ownerpass, 10);
        user.role = 'owner';

        db.users.insert(
            user,
            function (err, user) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                createcompany(user);
            });
    }
 
    function createcompany(user) {
        
        // set company object to companyParam without the cleartext password
        var company = _.omit(companyParam, ['ownerpass','ownername','ownersurname','ownerphone']);

        company.ownedBy = user.ops._id;
 
        db.companies.insert(
            company,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}
 
function getAll() {
    var deferred = Q.defer();
 
    db.companies.find().toArray(function (err, companies) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        // return companies (without hashed passwords)
        companies = _.map(companies, function (company) {
            return _.omit(company, 'hash');
        });
 
        deferred.resolve(companies);
    });
 
    return deferred.promise;
}
 
// function getById(_id) {
//     var deferred = Q.defer();
 
//     db.companies.findById(_id, function (err, company) {
//         if (err) deferred.reject(err.name + ': ' + err.message);
 
//         if (company) {
//             // return company (without hashed password)
//             deferred.resolve(_.omit(company, 'hash'));
//         } else {
//             // company not found
//             deferred.resolve();
//         }
//     });
 
//     return deferred.promise;
// }


 
function update(_id, companyParam) {
    var deferred = Q.defer();
 
    // validation
    db.companies.findById(_id, function (err, company) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (company.email !== companyParam.email) {
            // mobile has changed so check if the new mobile is already taken
            db.companies.findOne(
                { email: companyParam.email },
                function (err, company) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
 
                    if (company) {
                        // mobile already exists
                        deferred.reject('Email "' + req.body.email + '" is already taken')
                    } else {
                        updatecompany();
                    }
                });
        } else {
            updatecompany();
        }
    });
 
    function updatecompany() {
        // fields to update
        var set = {
            name:companyParam.name,
            role: companyParam.role,
            surname: companyParam.surname,
            email: companyParam.email,
            address: companyParam.address,
            phone: companyParam.phone,
            whatsapp: companyParam.whatsapp,
            assignedColor: companyParam.assignedColor,
            workingHour: companyParam.workingHour,
            vacation: companyParam.vacation,
            updated: companyParam.updated,                
        };
 
        // update password if it was entered
        if (companyParam.password) {
            set.hash = bcrypt.hashSync(companyParam.password, 10);
        }
 
        db.companies.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message); 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}


 
function _delete(_id) {
    var deferred = Q.defer();
 
    db.companies.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });

    return deferred.promise;
}