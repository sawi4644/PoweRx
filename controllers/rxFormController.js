const db = require('../models')
module.exports = {
    createRxForm: function(req, res) {
        console.log("Nick said take it from here backend", req.body)
        // res.sendStatus(418)
        db.rxForm
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getAllRxForm: function(req, res) {
        
        db.rxForm
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.rxForm
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    updateRxForm: function(req, res) {
        db.rxForm
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    deleteRxForm: function(req, res) {
        db.rxForm
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
}