var mongoose = require('mongoose')

//create user schema
var beerSchema = new mongoose.Schema({
	name: String,
	type: String,
	brewery: String,
	ABV: Number
})

//creates a method to display user's info
beerSchema.methods.info = function() {
	console.log('My name is: ' + this.name + '. I am ' + this.ABV + ' strong.')
}

//sets variable for schema
var Beer = mongoose.model('Beer', beerSchema)

//exports module
module.exports = Beer
