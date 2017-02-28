'use strict';
var data = require('./shop-data');
var fs = require('fs');
var path = require('path');

module.exports = {
  getAll : function(req, res){
    // fs.readFile(path.join(__dirname, './shopData.json'), function(err, data){
    //   if(err) {
    //     console.log(err);
    //     res.status(500).json(err);
    //   }else {
    //     // res.status(200).json(JSON.parse(data.toString()));
    //     res.json(JSON.parse(data));
    //     // console.log(JSON.parse(data));
    //   }
    // });


    res.json(data);

  }
}
