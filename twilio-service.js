var accountSid = 'AC199d9a4d1e47c60aba35cdffa50359f3'; // Your Account SID from www.twilio.com/console
var authToken = '3ac813dca71d49ace064ba93524f0dc5';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

module.exports = {
    // message: function (recipientNumber, senderNumber, messageText) {
    //     recipientNumber += '+' + recipientNumber;
    //     senderNumber += '+' + senderNumber;

    //     client.messages.create({
    //         body: messageText,
    //         to: recipientNumber,  // Text this number
    //         from: senderNumber // From a valid Twilio number
    //     }).then((message) => console.log(message.sid));
    // },
    message: function (body, to, from) {

        let recipientNumber = '+' + to
        let senderNumber = '+' + from

        client.messages.create({
            body: body,
            to: recipientNumber,  // Text this number
            from: senderNumber // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
    },
}
   

