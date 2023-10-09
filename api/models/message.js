const mongoose = require("mongoose")



const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    senderId: String,
    receiverId: String,
    message: String,
    timestamp: String,
    seen: Boolean,

})
module.exports = mongoose.model("message", userSchema)