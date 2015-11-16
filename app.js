var express = require('express')
	   ,app = express()
	,logger = require('morgan')
,bodyParser = require('body-parser')
,mongoose	= require('mongoose')
	  ,port = process.env.PORT || 3000
,beerRoutes = require('./routes/beer_routes.js')
	   ,ejs = require('ejs')
,ejsLayouts = require('express-ejs-layouts')

// app configurations
app.set('view engine', 'ejs')



//add conntection to mongo database
mongoose.connect('mongodb://localhost/CRUDNodeApp')

//log requests made to the app
app.use(logger('dev'))
app.use(ejsLayouts)
app.use('/assets', express.static(__dirname + '/assets'))
app.use(function(req,res,next){
	console.log("Request has been made")
	next()
})

//makes json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//create the root route
app.get('/', function(req, res) {
	res.send('Welcome to the beers page')
})

app.get('/index', function(req,res){
	//response, rendering the home page view, and setting second argument as object 
	res.render('index')
})

app.get('/create', function(req,res){
	//response, rendering the home page view, and setting second argument as object 
	res.render('create')
})

//use beer routes for those routes
app.use('/beers', beerRoutes)

//sets the port for the server
app.listen(port)
console.log('Server started on', port)


