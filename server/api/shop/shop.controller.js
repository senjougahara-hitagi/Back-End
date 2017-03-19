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
    db.getNewId(shopData, function(err, id){
      req.body.id = id;
      shopData.create(req.body, function(err, data){
        // console.log(err);
        if (err) {
          res.json({message: 'Fail'});
        }
        res.json({message: 'Success'});
      });
    });
  }
}
