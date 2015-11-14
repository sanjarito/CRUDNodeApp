var beerController = require('../controllers/beer_controller.js')
          ,express = require('express')
       ,beerRoutes = express.Router()

beerRoutes.route('/')
  .get(beerController.index)
  .post(beerControler.create)

module.exports = beerRoutes
