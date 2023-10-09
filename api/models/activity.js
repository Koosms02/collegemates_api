
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    location: String,
    userId: String,
    name: String,
    age: String,
    time: String,
    event: String
})

module.exports = mongoose.model("Activity", userSchema)