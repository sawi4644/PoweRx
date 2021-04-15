const router = require('express').Router()
// const adminController = require('../controllers/adminController')
const rxController= require('../controllers/rxController')
// const userController = require('../controllers/userController')


router.route('/api/form')
  .get(rxController.getRX)
  .post(rxController.getRX)

// router.route('/api/users/:id')
//   .get(userController.getUser)
//   .put(userController.updateUser)

module.exports = router