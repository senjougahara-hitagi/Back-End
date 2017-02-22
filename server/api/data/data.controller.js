'use strict';
var data = require('./shopData.json');
module.exports = {
  getAll : function(req, res){
    res.json(data);
  }
}
