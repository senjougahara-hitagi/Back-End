'use strict';

var shopData = require('./shop.model');

module.exports = {
  findAll : function(req, res){
    shopData.find().exec(function(err, data){
      var obj = {items: []};
      obj.items = data;
      res.json(obj);
    });
  },

  add: function(req, res) {
    shopData.create(req.body, function(err, data){
      console.log(err);
      if (err) {
        res.json({message: 'Fail'});
      }
      res.json({message: 'Success'});
    });
  }
}
