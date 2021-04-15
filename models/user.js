const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
    //might need to make one for checklist as well
    // info: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Info'
    //     }
    // ]
})

const User = mongoose.model('User', UserSchema)

module.exports = User;