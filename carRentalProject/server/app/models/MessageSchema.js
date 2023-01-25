const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            required: true,
        },
        yourMessage: {
            type: String,
            required: true,
        }
    }
);

const Message = mongoose.model('MessageSchema', MessageSchema);
module.exports = Message;