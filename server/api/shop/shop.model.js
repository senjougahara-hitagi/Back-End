'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopData = new Schema({
  id: Number,
  imageUrl: String,
  view: Number,
  like: Number,
  dislike: Number,
  Avatar: String,
  Name: String,
  Title: String,
  content: String
  // createdDate: {type: Date, default: Date.now},
  // author: {
  //   type: String,
  //   required: [true, 'Phai co author']
  // }
});

module.exports = mongoose.model('Shop', shopData);
