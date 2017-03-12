var db = require('mongoose');
db.Promise = global.Promise;

db.getNewId = function(model,cb){
  model.findOne()
  .select('id')
  .sort({id : -1})
  .exec(function(err,doc){
    console.log(doc);
    err ? cb(err) : cb( null, doc ? doc.id + 1 : 0 );
  })
}
module.exports =  db;
