var config = require('../../config.json');
var _ = require('lodash');
var request = require('request');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var cheerio = require('cheerio');

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

                        const $ = cheerio.load(body);

                        var title = $('title').text();

                        var thumbnail = $("meta[name='og:image']").attr("content");

                        if(typeof thumbnail == 'undefined'){
                            thumbnail = '';
                        }

                        var mediaDesc = $('#metadata').children().last().text();

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
                            deferred.reject('Please use valid tiktok | VIGO | LIKE video URL');  
                        }

                        var mp3URL = '';

                        if(body.indexOf('mp3') > -1){
                            mp3content = body.split('"play_url":{');

                            if(typeof mp3content[1] != 'undefined'){
                                if(mp3content[1].indexOf('mp3') > -1){
                                    mp3content = mp3content[1].split('}');
                                    if(typeof mp3content[0] != 'undefined'){
                                        mp3content = mp3content[0].split('"],');
                                        if(typeof mp3content[0] != 'undefined'){
                                            if(mp3content[0].indexOf('mp3') > -1){
                                                mp3content = mp3content[1].split('https:');  
                                                if(typeof mp3content[1] != 'undefined'){
                                                    mp3content = mp3content[1].split('"');
                                                    if(typeof mp3content[0] != 'undefined'){
                                                        if(mp3content[0].indexOf('mp3') > -1){                                                            
                                                            mp3URL = "https:"+mp3content[0];
                                                            mp3URL = mp3URL.replace(/u0026/g, "&");
                                                            mp3URL = mp3URL.replace(/\\/g,'');
                                                        }                                                        
                                                    }
                                                }
                                            }    
                                        }
                                    }
                                } 
                            }
                        }

                        var finaljson = {
                            "DownloadURL" : finalurl,
                            "ThumbnailURL" : thumbnail,
                            "Title" :title,
                            "MediaDesc":mediaDesc,
                            "Mp3URL": mp3URL
                        }
    
                        deferred.resolve(finaljson);
                    }catch(error) {
                        // Run time error
                        deferred.reject('Something went wrong, please try again later'); 
                    }
                }else{
                   //Error Logging
                   console.log(error);    
                   // Invalid URL
                   deferred.reject('Please use valid tiktok | VIGO | LIKE video URL'); 
                }
            })
        }else{
            // Invalid URL
            deferred.reject('Please use valid tiktok | VIGO | LIKE video URL');
        }
    }
    
    return deferred.promise;
}
 