const router = require('express').Router()
// const rxController= require('../controllers/rxController')
const HeaderInfo = require('../controllers/HeaderController')

router.route('/api/drawings')
  .get(rxController.getRX)
  .post(rxController.createRx)

router.route('/api/users/:id')
  .get(userController.getUser)
  .put(userController.updateUser)

router.route('/api/header')
  .get(HeaderInfo.getRX)
  .post(HeaderInfo.getRX)

module.exports = router