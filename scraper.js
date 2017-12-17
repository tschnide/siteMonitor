var request = require('request')
var cheerio = require('cheerio')

function one(cb){
    
};
module.exports = {
    scrape: function (asHandler) {
        url = 'https://shop.bitmain.com/main.htm?lang=en'
        let product = [];    
        
        request(url, asHandler)
        return product;
    },
    test: function(){
        return 
        inner(function() {
            return 'test'
        });
    },
};
