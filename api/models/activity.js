
const mongoose = require("mongoose")


const activitySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    location: String,
    userId: String,
    name: String,
    age: String,
    photos: Array,
    time: String,
    event: String
})

module.exports = mongoose.model("Activity", activitySchema)