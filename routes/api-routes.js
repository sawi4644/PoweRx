const router = require('express').Router()
// const adminController = require('../controllers/adminController')
// const rxController= require('../controllers/rxController')
// const userController = require('../controllers/userController')


router.route('/api/drawings')
  .get(rxController.getRX)
  .post(rxController.createRx)

router.route('/api/users/:id')
  .get(userController.getUser)
  .put(userController.updateUser)

module.exports = router