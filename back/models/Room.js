const mongoose = require('mpngoose')

const RoomSchema = new mongoose.Schema({
    title: {
        type: String
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    chat: [
        {
            message: {
                type: String
            },
            sender: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            time:{
                type: Date,
                default: Date.now
            }
        }
    ]
})