var Beer = require('../models/beer.js')

function index(req, res){
  Beer.find({}, function(err, beer){
    if (err) console.log(err)
    res.json(beer)
  })
}

function create(req, res){
  var beer = new Beer(req.body.beer)

  beer.save(function(err){
    if (err) console.log(err)
    res.json({success: true, message: 'Beer created!'})
  })
}


module.exports = {
  index: index
  ,create: create
}
