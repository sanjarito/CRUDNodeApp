var beerController = require('../controllers/beers_controller.js')
          ,express = require('express')
       ,beerRoutes = express.Router()

beerRoutes.route('/')
  .get(beerController.index)
  .post(beerController.create)

module.exports = beerRoutes
