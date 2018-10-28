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

                        var title = body.split('<title>');

                        if(typeof title[1] != 'undefined'){
                            title = title[1].split('</title>'); 
                            title = title[0];
                        }

                        var thumbnail = body.split('<meta property="og:image" content="');
                        if(typeof thumbnail[1] != 'undefined'){
                            thumbnail = thumbnail[1].split('">'); 
                            thumbnail = thumbnail[0];
                        }

                        var mediaDesc = body.split('<p id="caption">');
                        if(typeof mediaDesc[1] != 'undefined'){
                            mediaDesc = mediaDesc[1].split('</p>'); 
                            mediaDesc = mediaDesc[0];
                        }

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
                            deferred.reject('Please use valid tiktok video URL');  
                        }
            
                        var finaljson = {
                            "DownloadURL" : finalurl,
                            "ThumbnailURL" : thumbnail,
                            "Title" :title,
                            "MediaDesc":mediaDesc
                        }
    
                        deferred.resolve(finaljson);
                    }catch(error) {
                        // Run time error
                        deferred.reject('Please use valid tiktok video URL'); 
                    }
                }else{
                   //Error Logging
                   console.log(error);    
                   // Invalid URL
                   deferred.reject('Please use valid tiktok video URL'); 
                }
            })
        }else{
            // Invalid URL
            deferred.reject('Please use valid tiktok video URL');
        }
    }
    
    return deferred.promise;
}
 