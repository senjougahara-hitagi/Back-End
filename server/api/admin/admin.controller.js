var User = require('../../user/user.model');
var characters;

module.exports = {
  //search name have sugget
  search:   function(req, res){
      User.find({
        name: new RegExp(req.query.name, characters),
        username: req.query.username,
        role: req.query.role
      })
      .exec(function(err, data){
        console.log(req.query);
        if (err) res.json(err);
        else res.json(data);
      });
  }
}
