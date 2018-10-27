var config = require('../../config.json');
var _ = require('lodash');
var request = require('request');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');

var service = {};
service.get = get;
 
module.exports = service; 
 
function get(Param) {
    var finalurl = '';
    var deferred = Q.defer();
    var reqURL = Param.url;

    if(reqURL != ""){
        reqURL = reqURL.split('http');
        if(typeof reqURL[1] == 'undefined'){
            // Invalid URL
            deferred.reject('Given URL is not valid');
        }else{
            reqURL = "http"+reqURL[1];
            requestHTTP(reqURL);
        }
    }

    function requestHTTP(reqURL){
        if(reqURL != ''){
            request(reqURL, function (error, response, body) {
                if (!error && response.statusCode == 200) {

                    try{
                        var content = body.split('"download_addr":{');
                        content = content[1].split('}');
                        content = content[0].split('",');
                        content = content[0].split('https:');      
                        finalurl = "https:"+content[1];

                        if(finalurl.indexOf('http') > -1){                        
                            finalurl = finalurl.replace(/u0026/g, "&");
                            finalurl = finalurl.replace(/\\/g,'');
                        }else{
                            // Invalid URL
                            deferred.reject('Please use valid URL');  
                        }
            
                        var finaljson = {
                            "DownloadURL" : finalurl
                        }
    
                        deferred.resolve(finaljson);
                    }catch(error) {
                        // Run time error
                        deferred.reject('Something went wrong, please contact developer'); 
                    }
                }else{
                   //Error Logging
                   console.log(error);    
                   // Invalid URL
                   deferred.reject('Please use valid URL'); 
                }
            })
        }else{
            // Invalid URL
            deferred.reject('Given URL is not valid');
        }
    }
    
    return deferred.promise;
}
 