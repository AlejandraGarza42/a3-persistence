var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*Old one 
User Data
var users = [
  {id: 1, username: 'user1', password: 'iamone', displayName: 'User One', emails: [{value: 'user1@example.com'}]},
  {id: 2, username: 'user2', password: 'iamtwo', displayName: 'User Two', emails: [{value: 'user2@example.com'}]}
];

/*GET login page
exports.findById = function(id, cb){
  process.nextTick(function(){
    var idx = id -1;
    if(records[idx]){
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsernam = function(username, cb){
  process.nextTick(function(){
    for(var i = 0, len = records.length; i < len; i++){
      var record = records[i]; 
      if (record.username == username){
        return cb(null, record);
      }
    }
    return cb(null, null);
  })
}
*/