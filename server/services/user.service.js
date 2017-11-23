var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('users');
 
var service = {};
 
service.authenticate = authenticate;
// service.verify = verify;
// service.getAll = getAll;
// service.getById = getById;
// service.create = create;
// service.update = update;
// service.delete = _delete;
 
module.exports = service;
 
function authenticate(mobile, password, role) {
    var deferred = Q.defer();
 
    db.users.findOne({ mobile: mobile }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
         if (user && bcrypt.compareSync(password, user.hash)) {
           if(user.role.name == role.name){
            // authentication successful
            deferred.resolve({
                _id: user._id,
                mobile: user.mobile,
                fullname: user.fullname,
                role: user.role.name,
                deviceid : user.deviceid,
                token: jwt.sign({ sub: user._id }, config.secret)
            });
           }
           else { 
                // authentication failed
                deferred.resolve();
           }
        } else {
            // authentication failed
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}
 
// function getAll() {
//     var deferred = Q.defer();
 
//     db.users.find().toArray(function (err, users) {
//         if (err) deferred.reject(err.name + ': ' + err.message);
 
//         // return users (without hashed passwords)
//         users = _.map(users, function (user) {
//             return _.omit(user, 'hash');
//         });
 
//         deferred.resolve(users);
//     });
 
//     return deferred.promise;
// }
 
// function getById(_id) {
//     var deferred = Q.defer();
 
//     db.users.findById(_id, function (err, user) {
//         if (err) deferred.reject(err.name + ': ' + err.message);
 
//         if (user) {
//             // return user (without hashed password)
//             deferred.resolve(_.omit(user, 'hash'));
//         } else {
//             // user not found
//             deferred.resolve();
//         }
//     });
 
//     return deferred.promise;
// }


// function verify(userParam){
//     var deferred = Q.defer();

//     var country_code = "+91";
//     var tophone = country_code + userParam.mobile;
//     var dateFormat = require('dateformat');
//     var now = Date();
//     var day = dateFormat(now, "N");

//     token = userParam.token;
    
//     var ok = passcode.hotp({
//         secret: tophone + day,
//         counter: 4530
//     });

    
//     if(ok === token){
//         createUser()
//     }
//     else{
//         //Incorrect OTP
//         deferred.reject('Please enter correct OTP');
//     }

//     function createUser() {       
//         // set user object to userParam without the cleartext password
//         var user = _.omit(userParam, 'password','token'); 
 
//         // add hashed password to user object
//         user.hash = bcrypt.hashSync(userParam.password, 10);        
 
//         db.users.insert(
//             user,
//             function (err, doc) {
//                 if (err) deferred.reject(err.name + ': ' + err.message); 
//                 deferred.resolve();
//             });
//     }
//     return deferred.promise;
// }

// function create(userParam) {
//     var deferred = Q.defer();

//     // validation
//     db.users.findOne(
//         { mobile: userParam.mobile },
//         function (err, user) {
//             if (err) deferred.reject(err.name + ': ' + err.message);
 
//             if (user) {
//                 // email already exists
//                 deferred.reject('Mobile number "' + userParam.mobile + '" is already taken');
//             } else { 
//                 sendOtp();     
//             }
//         });

//     function sendOtp(){
//         var country_code = "+91";
//         var tophone = country_code + userParam.mobile;

//         var dateFormat = require('dateformat');
//         var now = Date();
//         var day = dateFormat(now, "N");
//         var token = passcode.hotp({
//             secret: tophone + day,
//             counter: 4530
//         });
//         msgBody = "Welcome to OyeBoys, Your one time password is:";
//         body = msgBody + token;

//         smsService.sendSms(tophone,body)
//         .then(function () {
//             deferred.resolve();
//         })
//         .catch(function (err) {
//             deferred.reject(err)
//         });        
//     }
//     return deferred.promise;
// }
 
// function update(_id, userParam) {
//     var deferred = Q.defer();
 
//     // validation
//     db.users.findById(_id, function (err, user) {
//         if (err) deferred.reject(err.name + ': ' + err.message);
 
//         if (user.email !== userParam.email) {
//             // mobile has changed so check if the new mobile is already taken
//             db.users.findOne(
//                 { email: userParam.email },
//                 function (err, user) {
//                     if (err) deferred.reject(err.name + ': ' + err.message);
 
//                     if (user) {
//                         // mobile already exists
//                         deferred.reject('Mobile "' + req.body.email + '" is already taken')
//                     } else {
//                         updateUser();
//                     }
//                 });
//         } else {
//             updateUser();
//         }
//     });
 
//     function updateUser() {
//         // fields to update
//         var set = {
//             firstName: userParam.firstName,
//             lastName: userParam.lastName,
//             mobile: userParam.mobile,
//         };
 
//         // update password if it was entered
//         if (userParam.password) {
//             set.hash = bcrypt.hashSync(userParam.password, 10);
//         }
 
//         db.users.update(
//             { _id: mongo.helper.toObjectID(_id) },
//             { $set: set },
//             function (err, doc) {
//                 if (err) deferred.reject(err.name + ': ' + err.message); 
//                 deferred.resolve();
//             });
//     }
 
//     return deferred.promise;
// }


 
// function _delete(_id) {
//     var deferred = Q.defer();
 
//     db.users.remove(
//         { _id: mongo.helper.toObjectID(_id) },
//         function (err) {
//             if (err) deferred.reject(err.name + ': ' + err.message);
 
//             deferred.resolve();
//         });

//     return deferred.promise;
// }