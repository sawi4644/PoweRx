const db = require('../models')

module.exports = {
    getUser: function(req, res) {
        const { id } = req.params
        console.log(id)
        res.send(id)
    },
    updateUser: function(req, res) {

    }
}