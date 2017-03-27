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
  },

  find: function(req, res){
    shopData.findOne({id : req.query.id}).exec(function(err, data){
      res.json(data);
    });
  },

  edit: function(req, res){
    shopData.findOne({id : req.body.id}).exec(function(err, data){
      data.Name = req.body.Name;
      data.Avatar = req.body.Avatar;
      data.save(function(err, newData){
        if (err) {
          res.json({message: 'Fail'});
        }else
          res.json({message: 'Success', data : newData});
      })
    });
  }
}
