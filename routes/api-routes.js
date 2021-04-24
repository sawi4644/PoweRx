const router = require("express").Router();
const rxController = require("../controllers/rxFormController");
const userController = require("../controllers/userController");

router
  .route("/rxForms")
  .get(rxController.getAllRxForm) 
  .post(rxController.createRxForm); 

router
  .route("/rxForms/:id")
  .get(rxController.getRxFromByUid)
  .put(rxController.updateRxForm)
  .delete(rxController.deleteRxForm);

router
  .route("/users/:id")
  .get(userController.getUser)
  .put(userController.updateUser);

module.exports = router;
