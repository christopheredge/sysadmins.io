'use strict';
var chat = require('../../app/controllers/chat.server.controller');
 
module.exports = function(app) {
   app.route('/chat').get(chat.index, function (req, res){
    });
};
