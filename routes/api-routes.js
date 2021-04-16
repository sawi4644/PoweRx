const router = require('express').Router()
// const adminController = require('../controllers/adminController')
const rxController= require('../controllers/rxFormController')
const userController = require('../controllers/userController')


router.route('/api/rxForms')
  .get(rxController.getRxForm) //get all forms
  .post(rxController.createRxForm) //create a drawing- run controller model when one of these routes get hit

router.route('/api/users/:id')
  .get(userController.getUser)
  .put(userController.updateUser)

module.exports = router