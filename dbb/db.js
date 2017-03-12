var db = require('mongoose');
db.Promise = global.Promise;

db.getNewId = function(model,cb){
  model.finOne()
  .select('id')
  .sort({id: -1})
  .exec(function(err,doc)){
    err? cb(err) : cb(null,doc? doc.id + 1 : 0);
  })
}
