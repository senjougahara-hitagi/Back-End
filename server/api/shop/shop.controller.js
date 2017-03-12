'use strict';

var shopData = require('./shop.model');
var db = require('../db.js');

module.exports = {
  findAll : function(req, res){
    shopData.find().exec(function(err, data){
      var obj = {items: []};
      obj.items = data;
      res.json(obj);
    });
  },

  add: function(req, res) {
    db.getNewId(shopData, function(err,doc){
      // console.log('get new id:',doc);
      // console.log('request body:',req.body);
      req.body.id = doc;
      shopData.create(req.body, function(err, data){
        // console.log('create shop',err,data);
        if (err) {
          res.json({message: 'Fail'});
        }
        res.json({message: 'Success'});
      });
    });
  }
}
