let scraper = require('./scraper');
let request = require('request');
let cheerio = require('cheerio');
let product = [];
url = 'https://shop.bitmain.com/main.htm?lang=en'

productListLength = 0;

let asyncHandler = function (error, response, html) {
    if (!error) {
        var $ = cheerio.load(html)

        let productList = [];

        // This pulls the description of each miner and puts it into an array
        $('.goodsDescrip').each(function (i, elem) {
            //var data = $(this)
            //product[i] = $(this).children().first().text()
            productList.push($(this).children().first().text())
        })
        if(productList.length !== productListLength){
            //send text message


            productListLength = productList.length
        }
        else{
            //don't send text message
        }
    } else {
        //error handling code
        console.log(err);
    }
}

let x = scraper.scrape(asyncHandler);
console.log('x is: ' + x);


