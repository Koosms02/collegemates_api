
const mongoose = require("mongoose")


const userSchema = mongose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    location: Location,
    userId: String,
    time: String,
    event: String
})

module.exports = mongoose.model("Activity", userSchema)