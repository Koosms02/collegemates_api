const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phonenumber: String,
    name: String,
    birthday: String,
    age: Number,
    university: String,
    course: String,
    residence: String,
    location: Geolocation,
    verified: String,
    Photos: Array,
    interest: Array,
    bio: String,
    gender: String,
    preference: String,
    status: String,
    preferredDistance: Number,
    preferredAgeRange: Array,
    likedIds: Array,
    disLikedIds: Array,
    likedByIds: Array,
    locality: String,
})

module.exports = mongoose.model('User', userSchema)